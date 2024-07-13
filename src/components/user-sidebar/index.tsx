import ProfileIcon from "@/assets/icons/profile-icon.svg";
import WatchlistIcon from "@/assets/icons/watchlist-icon.svg";
import PortoIcon from "@/assets/icons/porto-icon.svg";
import HomeIcon from "@/assets/icons/home-icon.svg";

import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../../public/logo.svg";

const UserSidebar = () => {
  const handleLogout = () => {
    window.location.href = (import.meta.env.VITE_API_URL || "") + "/auth/logout";
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen gap-20 px-4 bg-primary-dark w-[480px]">
      <div className="flex gap-12 items-center text-sm">
        <img
          src={Logo}
          onClick={() => navigate("/")}
          className="flex cursor-pointer h-[100px] w-[100px] items-center text-white"
        />
      </div>
      <div className="flex flex-col gap-8">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex px-4 text-white hover:text-white border-2 border-white m-4 p-4 gap-2 rounded-md text-xl font-semibold items-center ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          <img src={ProfileIcon} alt="profile-icon" className="w-8 h-8" />
          Profile
          <div className="rounded-full px-2 justify-self-end text-xs items-center flex border-2 border-green-600">
            moderate
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex px-4 gap-2 text-white py-2 rounded-md hover:text-white ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          <img src={HomeIcon} alt="home-icon" className="w-6 h-6" />
          Home
        </NavLink>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            `flex px-4 gap-2 text-white py-2 rounded-md hover:text-white ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          <img src={WatchlistIcon} alt="watchlist-icon" className="w-6 h-6" />
          Watchlist
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `flex px-4 gap-2 text-white py-2 rounded-md hover:text-white ${
              isActive ? "bg-blue-600" : ""
            }`
          }
        >
          <img src={PortoIcon} alt="portofolio-icon" className="w-6 h-6" />
          Portofolio
        </NavLink>
      </div>
      <div
        onClick={handleLogout}
        className="cursor-pointer bottom-0 border-2 hover:bg-opacity-40 hover:text-white border-red-500 bg-red-500 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg"
      >
        Logout
      </div>
    </div>
  );
};

export default UserSidebar;
