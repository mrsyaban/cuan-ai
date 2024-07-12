import { useNavigate } from "react-router-dom";
// import BackgroundAsset from "@/assets/images/background-asset.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black flex w-screen items-center justify-center relative">
      <div className="mx-auto w-fit flex flex-col items-center text-white text-4xl gap-16  z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#FF3BFF] to-[#00F0FF]">
            Analyze stocks in a second
          </div>
          <div className="text-white text-center text-2xl w-[40%] text-wrap ">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div
            onClick={() => navigate("/analyzer")}
            className="cursor-pointer border-2 hover:bg-gray-800 border-primary-light w-fit self-center py-4 px-8 rounded-full text-white text-2xl"
          >
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
