import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ isLogin }: { isLogin: boolean }) => {
  const handleLogin = () => {
    window.location.href = (import.meta.env.VITE_API_URL || "") + "/auth/google";
  };

  return (
    <button
      onClick={() => handleLogin()}
      className="flex flex-row items-center w-80 border-2 gap-3 rounded-md px-5 py-3 cursor-pointer justify-center"
    >
      {isLogin ? "Login" : "Sign Up"} with <FcGoogle />
    </button>
  );
};

export default GoogleLogin;
