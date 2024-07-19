import { useEffect } from "react";
import Posts from "../components/Posts/Posts";
import Trending from "../components/Trending/Trending";
import Sidebar from "../components/Sidebar";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="flex justify-between items-start md:gap-2 gap-3 md:flex-row flex-col max-w-7xl mx-auto w-full lg:px-0 px-2">
      <div className="flex-2 md:sticky top-[50px] md:block hidden h-screen overflow-y-scroll">
        <Sidebar />
      </div>
      <div className="flex-4 w-full">
        <Posts userPosts={false} />
      </div>
      <div className="flex-2 lg:flex hidden sticky top-[50px] h-screen overflow-y-scroll pb-2">
        <Trending />
      </div>
    </div>
  );
}
