import { Modal, Radio } from "@mantine/core";
import ProfilePic from "./ProfilePic";
import CoverPic from "./CoverPic";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/userAction";

function ProfileModal({ opened, setOpened, user }) {
  const { userInfo } = useSelector((state) => state.authReducer.authData);

  const oldProfile = userInfo.profilePic;
  const oldCover = userInfo.coverPic;

  const [profilePic, setProfilePic] = useState(
    user?._id === userInfo._id && userInfo.profilePic
  );
  const [coverPicture, setCoverPicture] = useState(
    user?._id === userInfo._id && userInfo.coverPic
  );
  const [values, setValues] = useState({
    firstName: user?._id === userInfo._id && userInfo.firstName,
    lastName: user?._id === userInfo._id && userInfo.lastName,
    username: user?._id === userInfo._id && userInfo.username,
    caption: user?._id === userInfo._id && userInfo.caption,
    birthday: user?._id === userInfo._id && userInfo.birthday,
    gender: user?._id === userInfo._id && userInfo.gender,
    studiedAt: user?._id === userInfo._id && userInfo.studiedAt,
    livesIn: user?._id === userInfo._id && userInfo.livesIn,
    country: user?._id === userInfo._id && userInfo.country,
    worksAs: user?._id === userInfo._id && userInfo.worksAs,
  });

  const dispatch = useDispatch();
  const handleSubmit = () => {
    const data = values;
    data.profilePic = profilePic;
    data.coverPic = coverPicture;
    data.currentUserId = user?._id;
    try {
      dispatch(updateUser(user?._id, data));
      setOpened(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      title="Update your profile"
      size={"lg"}
    >
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.firstName}
            onChange={(e) =>
              setValues({ ...values, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Works as"
          className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
          value={values.worksAs}
          onChange={(e) => setValues({ ...values, worksAs: e.target.value })}
        />
        <div className="flex gap-3 items-center sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Birthday"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.birthday}
            onChange={(e) => setValues({ ...values, birthday: e.target.value })}
          />
          <input
            type="text"
            placeholder="Studied at"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.studiedAt}
            onChange={(e) =>
              setValues({ ...values, studiedAt: e.target.value })
            }
          />
        </div>

        <input
          type="text"
          placeholder="Your caption"
          className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
          value={values.caption}
          onChange={(e) => setValues({ ...values, caption: e.target.value })}
        />
        <div className="flex gap-3 items-center sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Lives in"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.livesIn}
            onChange={(e) => setValues({ ...values, livesIn: e.target.value })}
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full bg-[#f3f3f3] outline-none py-2 px-3 border-gray-200 rounded-lg text-[15.5px]"
            value={values.country}
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[15px]">Gender:</span>
          <Radio
            value="female"
            label="Female"
            name="gender"
            onChange={(e) => setValues({ ...values, gender: e.target.value })}
          />
          <Radio
            value="male"
            label="Male"
            name="gender"
            onChange={(e) => setValues({ ...values, gender: e.target.value })}
          />
        </div>

        <div className="flex justify-between items-center gap-3 sm:flex-row flex-col">
          <ProfilePic
            setProfilePic={setProfilePic}
            profilePic={profilePic}
            oldProfile={oldProfile}
          />
          <CoverPic
            setCoverPicture={setCoverPicture}
            coverPicture={coverPicture}
            oldCover={oldCover}
          />
        </div>

        <button className="bg-secondary text-secondary h-10 flex items-center justify-center mt-3 rounded-lg sm:w-[70%] mx-auto w-full text-base !leading-3">
          Submit ny changes
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
