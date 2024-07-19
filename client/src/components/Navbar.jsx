import {
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const authData = useSelector((state) => state.authReducer?.authData);
  let userData;
  if (authData) {
    const { userInfo } = authData;
    userData = userInfo;
  }

  const navigate = useNavigate();

  return (
    <div className="sticky top-0 shadow-sm h-[50px] z-10 flex items-center justify-center w-full px-4 bg-primary text-secondary">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center flex-1 gap-5">
          <h1 className="text-xl">
            <Link to="/">dodobook</Link>
          </h1>
        </div>
        <div className="flex items-center lg:flex-1 flex-2 justify-end gap-5">
          <div className="w-full sm:flex hidden items-center gap-2 bg-[#ecf3ff] rounded-md">
            <input
              type="text"
              className="outline-none w-full bg-transparent placeholder-gray-500 text-[#121212] text-[15px] px-3 py-1.5"
              placeholder="Search for friends, posts or video"
            />
          </div>
          <div>
            <IoPersonOutline size={20} />
          </div>
          <div>
            <IoNotificationsOutline size={20} />
          </div>
          <div>
            <div
              className="w-[32px] cursor-pointer"
              onClick={() => navigate(`/profile/${userData?._id}`)}
            >
              <img
                src={
                  userData?.profilePic ||
                  "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
                }
                alt=""
                className="size-8 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
