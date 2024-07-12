import { useNavigate } from "react-router-dom";
// import BackgroundAsset from "@/assets/images/background-asset.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black flex w-screen items-center justify-center relative">
      <div className="mx-auto w-fit flex flex-col items-center text-white text-4xl gap-16  z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#00F0FF]">Discover Your Optimal Stock Picks</div>
          <div className="flex flex-col items-center">
            <div className="text-white text-center text-2xl text-nowrap ">The best investment decisions start with you. </div>
            <div className="text-white text-center text-2xl text-nowrap ">relax, feel the ease, and invest with confidence.</div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div onClick={() => navigate("/analyzer")} className="cursor-pointer border-2 hover:bg-gray-800 border-primary-light w-fit self-center py-4 px-8 rounded-full text-white text-2xl">
            Get Started
          </div>
          <div onClick={() => navigate("/login")} className="cursor-pointer border-2 hover:bg-gray-800 border-blue-400 bg-blue-300 bg-opacity-25 w-fit self-center py-4 px-8 rounded-full text-white text-2xl">
            Free trial
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
