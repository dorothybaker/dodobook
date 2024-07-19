import {
  IoBookmarksOutline,
  IoCalendarOutline,
  IoChatboxEllipsesOutline,
  IoFlash,
  IoFlowerOutline,
  IoGridOutline,
  IoPeopleOutline,
  IoSettingsOutline,
  IoTvOutline,
} from "react-icons/io5";

function Sidebar() {
  const links = [
    { name: "Feed", icon: IoGridOutline },
    { name: "Messenger", icon: IoFlash },
    { name: "Chats", icon: IoChatboxEllipsesOutline },
    { name: "Groups", icon: IoPeopleOutline },
    { name: "Watch", icon: IoTvOutline },
    { name: "Settings", icon: IoSettingsOutline },
    { name: "Events", icon: IoCalendarOutline },
    { name: "Bookmarks", icon: IoBookmarksOutline },
    { name: "Fundraiser", icon: IoFlowerOutline },
  ];

  return (
    <div>
      <div className="w-full flex flex-col gap-5 py-2">
        <ul className="flex flex-col gap-4 bg-gray-50/80 p-4 rounded-xl">
          {links.map((link, id) => {
            const Icon = link.icon;
            return (
              <li key={id} className="flex items-center gap-3 cursor-pointer">
                <Icon size={18} className="text-primary" />
                <span className="mt-0.5 text-sm">{link.name}</span>
              </li>
            );
          })}
          <li className="text-sm bg-gray-300 rounded-lg text-center py-1.5 cursor-pointer">
            <span>Show More</span>
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300" />

        <div className="flex flex-col gap-2 bg-gray-50/80 p-4 rounded-xl">
          <span className="text-xs text-gray-500 uppercase">Shortcuts</span>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">The Night Watch</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">Whimsical Wonderland</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">Sunny Side Up Breakfasts</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">Green Thumb Landscaping</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">Dynamic Dance Studio</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              <span className="text-sm">Wholesome Harvest Grocery</span>
            </div>
            <div className="text-sm bg-gray-300 rounded-lg text-center py-1.5 cursor-pointer">
              <span>Show More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
