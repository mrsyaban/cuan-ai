import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen h-[72px] absolute top-0 z-10 flex px-32 justify-between item-center">
      <Link to="/" className="flex w-fit h-full items-center text-white">
        Logo
      </Link>
      <Link to="/login" className="cursor-pointer border-2 hover:bg-opacity-40 hover:text-white border-pink-400 bg-pink-300 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg">
        Subscribe
      </Link>
    </div>
  );
};

export default Header;
