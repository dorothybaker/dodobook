import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/userAction";

function MyProfileCard({ user, postNumber }) {
  const [opened, setOpened] = useState(false);
  const { userInfo } = useSelector((state) => state.authReducer.authData);

  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(followUser(user?._id, userInfo));
  };
  const handleUnFollow = () => {
    dispatch(unfollowUser(user?._id, userInfo));
  };

  return (
    <>
      <div className="flex flex-col gap-3 rounded-xl bg-white shadow-sm pb-4 relative">
        <div className="relative">
          <img
            src={
              (user?._id === userInfo._id
                ? userInfo.coverPic
                : user?.coverPic) ||
              "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="coverImage"
            className="lg:h-[200px] sm:h-[180px] h-[160px] w-full object-cover rounded-t-xl"
          />
          <img
            src={
              (user?._id === userInfo._id
                ? userInfo.profilePic
                : user?.profilePic) ||
              "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
            }
            alt="profileImage"
            className="lg:w-[130px] sm:w-[120px] sm:h-[120px] lg:h-[130px] w-[100px] h-[100px] object-cover rounded-full absolute -bottom-[30%] sm:left-[40%] left-[38%]"
          />
        </div>

        <div className="flex flex-col items-center justify-center lg:mt-[8.5%] md:mt-[10%] sm:mt-[8%] mt-[12%] px-2">
          <span className="font-normal">
            {user?._id === userInfo._id ? userInfo.firstName : user?.firstName}{" "}
            {user?._id === userInfo._id ? userInfo.lastName : user?.lastName}
          </span>
          <span className="text-sm text-gray-400">
            @{user?._id === userInfo._id ? userInfo.username : user?.username}
          </span>

          {user?.caption || (user?._id === userInfo._id && userInfo.caption) ? (
            <span className="text-gray-500 text-sm text-center text-[15px]">
              {user?._id === userInfo._id ? userInfo.caption : user?.caption}
            </span>
          ) : (
            <span className="text-[15px] text-gray-400">
              Your tdbMedia caption goes here!
            </span>
          )}
        </div>

        <div className="px-3">
          <hr className="h-[2px] bg-gray-200" />
          <div className="flex divide-x-2 py-2">
            <div className="flex flex-col gap-0.5 py-2 flex-1 items-center justify-center">
              <span className="font-medium">
                {user?._id === userInfo._id
                  ? userInfo.followers.length
                  : user?.followers.length}
              </span>
              <span className="text-sm text-gray-600">Followers</span>
            </div>
            <div className="flex flex-col gap-0.5 py-2 flex-1 items-center justify-center">
              <span className="font-medium">
                {user?._id === userInfo._id
                  ? userInfo.following.length
                  : user?.following.length}
              </span>
              <span className="text-sm text-gray-600">Following</span>
            </div>
            <div className="flex flex-col gap-0.5 py-2 flex-1 items-center justify-center">
              <span className="font-medium">{postNumber}</span>
              <span className="text-sm text-gray-600">Posts</span>
            </div>
          </div>
          <hr className="h-[2px] bg-gray-200" />
          {userInfo._id === user?._id ? (
            <div
              className="px-3 text-center mt-3.5 w-max mx-auto"
              onClick={() => setOpened(true)}
            >
              <span className="text-base uppercase font-semibold cursor-pointer text-primary">
                Update my profile
              </span>
            </div>
          ) : (
            <div className="flex justify-center items-center w-full mt-3.5">
              {userInfo?.following?.includes(user?._id) ? (
                <button
                  className="text-primary text-base uppercase font-semibold"
                  onClick={handleUnFollow}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="text-primary text-base uppercase font-semibold"
                  onClick={handleFollow}
                >
                  Follow
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {opened && (
        <ProfileModal opened={opened} setOpened={setOpened} user={user} />
      )}
    </>
  );
}

export default MyProfileCard;
