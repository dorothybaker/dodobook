import { useSelector } from "react-redux";

import {
  MdOutlineEvent,
  MdOutlinePhotoLibrary,
  MdOutlineSecurity,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { GoStopwatch } from "react-icons/go";
import {
  IoGameControllerOutline,
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";
import { GrUpgrade } from "react-icons/gr";

function ProfileCard() {
  const { userInfo } = useSelector((state) => state.authReducer.authData);

  return (
    <div
      className="sm:flex-2 flex-1 sticky top-[50px]"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="flex flex-col divide-y gap-4 sm:p-4 p-3 w-full h-full overflow-y-scroll">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <LiaUserFriendsSolid size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Friends</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <HiOutlineUserGroup size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Groups</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <IoStorefrontOutline size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">MarketPlace</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <IoNotificationsOutline size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Notifications</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <GoStopwatch size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Memories</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-3.5">
          <h1 className="text-[13px] text-gray-500 sm:block hidden">
            Your shortcuts
          </h1>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <MdOutlineEvent size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Events</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <IoGameControllerOutline size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Gaming</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <MdOutlinePhotoLibrary size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Gallery</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <MdOutlineVideoLibrary size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Videos</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <TiMessages size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Messages</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-3.5">
          <h1 className="text-[13px] text-gray-500 sm:block hidden">Others</h1>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <IoNewspaperOutline size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">News</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <GrUpgrade size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Upgrade</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <IoSettingsOutline size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Settings</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-normal justify-center">
            <MdOutlineSecurity size={19} className="text-primary" />
            <span className="text-sm sm:block hidden">Security</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
