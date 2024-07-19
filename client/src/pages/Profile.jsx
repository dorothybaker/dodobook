import { useParams } from "react-router-dom";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileLeft from "../components/Profile/ProfileLeft";
import Trending from "../components/Trending/Trending";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../actions/userAction";

function Profile() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="flex justify-between items-start md:gap-2 gap-3 md:flex-row flex-col lg:px-0 px-2 max-w-7xl w-full mx-auto">
      <div className="lg:flex-2 flex-3 md:sticky top-[10px] md:block hidden">
        <ProfileLeft data={data} />
      </div>
      <div className="lg:flex-4 flex-5 w-full">
        <ProfileInfo data={data} />
      </div>
      <div className="flex-2 lg:block hidden sticky top-0">
        <Trending />
      </div>
    </div>
  );
}

export default Profile;
