import { Link } from "react-router-dom";
import Logo from "/logo.svg"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[72px] items-center absolute top-0 z-10 flex px-32 py-12 justify-between">
      <div className="flex gap-12 items-center text-sm ">

        <img src={Logo} onClick={()=>navigate("/")} className="flex cursor-pointer h-[100px] w-[100px] items-center text-white"/>
        UNLOCK THE TRUE POTENTIAL OF INVESTMENT
      </div>
        
      <Link to="/login" className="cursor-pointer border-2 hover:bg-opacity-40 hover:text-white border-pink-400 bg-pink-300 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg">
        Subscribe
      </Link>
    </div>
  );
};

export default Header;
