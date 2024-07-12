import ProfileIcon from "@/assets/icons/profile-icon.svg";
import WatchlistIcon from "@/assets/icons/watchlist-icon.svg";
import PortoIcon from "@/assets/icons/porto-icon.svg";
import HomeIcon from "@/assets/icons/home-icon.svg";

import { Link } from "react-router-dom";

const UserSidebar = () => {
  const handleLogout = () => {
    window.location.href = (import.meta.env.VITE_API_URL || "") + "/auth/logout";
  }

  return (
    <div className="flex flex-col h-screen sticky gap-20 bg-primary-dark w-[280px] ">
      <div className="flex px-4">
        Logo
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/profile" className="flex px-4 text-white hover:text-white border-2 border-white m-4 p-4 gap-2 rounded-md text-xl font-semibold items-center">
          <img src={ProfileIcon} alt="profile-icon" className="w-8 h-8" />
          Profile
        </Link>
        <Link to="/" className="flex px-4 gap-2 text-white hover:text-white">
          <img src={HomeIcon} alt="watchlist-icon" className="w-6 h-6" />
          Home
        </Link>
        <Link to="/watchlist" className="flex px-4 gap-2 text-white hover:text-white">
          <img src={WatchlistIcon} alt="watchlist-icon" className="w-6 h-6" />
          Watchlist
        </Link>
        <Link to="/portofolio" className="flex px-4 gap-2 text-white hover:text-white">
          <img src={PortoIcon} alt="watchlist-icon" className="w-6 h-6" />
          Portofolio
        </Link>
      </div>
      <div onClick={handleLogout}  className="cursor-pointer bottom-0 border-2 hover:bg-opacity-40 hover:text-white border-red-500 bg-red-500 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg">
        Logout
      </div>
    </div>
  )
}

export default UserSidebar