import { useState } from "react";
import Posts from "../Posts/Posts";
import InfoCard from "./InfoCard";
import MyProfileCard from "./MyProfileCard";

function ProfileInfo({ data }) {
  const [postNumber, setPostNumber] = useState(0);

  return (
    <div className="flex flex-col gap-4 sm:p-2 px-0 py-2">
      <MyProfileCard user={data} postNumber={postNumber} />
      <div className="block md:hidden">
        <InfoCard user={data} />
      </div>
      <Posts
        userPosts={true}
        userId={data?._id}
        setPostNumber={setPostNumber}
      />
    </div>
  );
}

export default ProfileInfo;
