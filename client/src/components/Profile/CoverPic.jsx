import { useEffect, useRef } from "react";
import { GoVerified } from "react-icons/go";

function CoverPic({ coverPicture, setCoverPicture, oldCover }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

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
          setCoverPicture(result?.info?.secure_url);
        }
      }
    );
  }, []);

  return (
    <button
      className="flex items-center gap-2 bg-gray-200 text-primary text-sm  sm:px-3 py-2 w-full text-center justify-center rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        widgetRef.current?.open();
      }}
    >
      <GoVerified size={20} />
      <span>
        {oldCover === coverPicture
          ? "Change cover picture"
          : "Cover picture changed"}
      </span>
    </button>
  );
}

export default CoverPic;
