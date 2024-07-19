import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authAction";

function InfoCard({ user }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  const { userInfo } = useSelector((state) => state.authReducer.authData);

  return (
    <div className="flex flex-col gap-4 bg-gray-50/80 p-4 rounded-lg">
      <h1 className="text-gray-500 text-xs border-b border-gray-200 pb-1 w-full">
        Personal Information
      </h1>
      <div className="flex flex-col gap-4 *:text-sm">
        <h3>
          <span className="text-gray-600">Birthday:</span>{" "}
          {(user?._id === userInfo._id ? userInfo.birthday : user?.birthday) ? (
            <span>
              {user?._id === userInfo._id ? userInfo.birthday : user?.birthday}
            </span>
          ) : (
            <span className="text-gray-400">your_birthday</span>
          )}
        </h3>
        <h3>
          <span className="text-gray-600">Works as:</span>{" "}
          {(user?._id === userInfo._id ? userInfo.worksAs : user?.worksAs) ? (
            <span>
              {user?._id === userInfo._id ? userInfo.worksAs : user?.worksAs}
            </span>
          ) : (
            <span className="text-gray-400">your_occupation</span>
          )}
        </h3>
        <h3>
          <span className="text-gray-600">Studied at:</span>{" "}
          {(
            user?._id === userInfo._id ? userInfo.studiedAt : user?.studiedAt
          ) ? (
            <span>
              {user?._id === userInfo._id
                ? userInfo.studiedAt
                : user?.studiedAt}
            </span>
          ) : (
            <span className="text-gray-400">studied_at</span>
          )}
        </h3>
        <h3>
          <span className="text-gray-600">Lives in:</span>{" "}
          {(user?._id === userInfo._id ? userInfo.livesIn : user?.livesIn) ? (
            <span>
              {user?._id === userInfo._id ? userInfo.livesIn : user?.livesIn}
            </span>
          ) : (
            <span className="text-gray-400">where_you_live</span>
          )}
        </h3>
        <h3>
          <span className="text-gray-600">From:</span>{" "}
          {(user?._id === userInfo._id ? userInfo.country : user?.country) ? (
            <span>
              {user?._id === userInfo._id ? userInfo.country : user?.country}
            </span>
          ) : (
            <span className="text-gray-400">country_from</span>
          )}
        </h3>
        <h3>
          <span className="text-gray-600">Gender:</span>{" "}
          {(user?._id === userInfo._id ? userInfo.gender : user?.gender) ? (
            <span className="capitalize">
              {user?._id === userInfo._id ? userInfo.gender : user?.gender}
            </span>
          ) : (
            <span className="text-gray-400">your_gender</span>
          )}
        </h3>
      </div>
      {user?._id === userInfo?._id && (
        <button
          className="py-2 px-3 bg-secondary text-secondary rounded-sm w-full text-sm uppercase"
          onClick={handleLogOut}
        >
          Log out
        </button>
      )}
    </div>
  );
}

export default InfoCard;
