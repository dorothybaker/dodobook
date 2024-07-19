import { useEffect, useRef } from "react";
import { GoImage } from "react-icons/go";

function ProfilePic({ setProfilePic, profilePic, oldProfile }) {
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
          setProfilePic(result?.info?.secure_url);
        }
      }
    );
  }, []);
  return (
    <button
      className="flex items-center gap-2 bg-primary text-sm text-white sm:px-3 py-2 w-full text-center justify-center rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        widgetRef.current?.open();
      }}
    >
      <GoImage size={20} />
      <span>
        {oldProfile === profilePic
          ? "Change profile picture"
          : "Profile picture changed"}
      </span>
    </button>
  );
}

export default ProfilePic;
