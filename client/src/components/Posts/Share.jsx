import { GoLocation } from "react-icons/go";
import { SiEbox, SiElgato, SiGooglebard, SiGooglephotos } from "react-icons/si";
import { LiaFileVideo } from "react-icons/lia";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../actions/uploadAction";

function Share() {
  const { userInfo } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleSubmit = () => {
    const newPost = {
      userId: userInfo._id,
      description,
      image: image ? image : "",
      video: video ? video : "",
    };

    try {
      dispatch(uploadPost(newPost));
      setImage(null);
      setVideo(null);
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "duihsu76h",
        uploadPreset: "bnbv67vs",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          if (result?.info?.video) {
            setVideo(result?.info?.secure_url);
          } else {
            setImage(result?.info?.secure_url);
          }
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-gray-50/80 sm:px-3 px-2 py-5 rounded-xl">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <div>
            <div className="w-[32px]">
              <img
                src={
                  userInfo.profilePic ||
                  "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
                }
                alt="profileImage"
                className="size-8 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder={`Hello, ${userInfo.username}, what is on your mind?`}
              className="w-full outline-none bg-gray-200 rounded-lg h-10 px-3 text-[15px] ellipsis"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between gap-3 items-center sm:flex-row flex-col">
            <div className="flex lg:gap-6 sm:gap-4 gap-3 items-center flex-wrap">
              <div
                className={`items-center justify-center gap-1 cursor-pointer flex ${
                  image ? "text-green-800" : "text-[#4cb256]"
                }`}
                onClick={() => widgetRef.current?.open()}
              >
                <SiGooglephotos size={17} className="mb-[3px]" />
                <span className="text-sm">
                  {image ? "Photo Added" : "Photo"}
                </span>
              </div>
              <div
                className={`items-center justify-center gap-1 cursor-pointer flex ${
                  video ? "text-blue-900" : "text-[#4a4eb7]"
                }`}
                onClick={() => widgetRef.current?.open()}
              >
                <SiGooglebard size={17} className="mb-0.5" />
                <span className="text-sm">
                  {video ? "Video Added" : "Video"}
                </span>
              </div>
              <div className="items-center justify-center gap-1 cursor-pointer flex text-[#ef5757]">
                <SiEbox size={17} className="mb-[3px]" />
                <span className="text-sm">Location</span>
              </div>
            </div>

            <div className="flex-1 items-center sm:justify-end justify-center gap-1 flex w-full">
              <button
                className={`border-b-[1.5px] px-2 font-semibold leading-4 ${
                  loading
                    ? "text-primary/70 border-[#3b5998]/70"
                    : "text-primary border-[#3b5998]"
                } `}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                disabled={loading}
              >
                {loading ? "Sharing" : "Share"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
