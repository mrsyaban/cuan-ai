import { useState, useEffect } from "react";
import GoogleLogin from "../../components/buttons/GoogleLogin";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    // You can add any initialization or side effects here if needed
  }, []);

  return (
    <div className="flex flex-col w-screen justify-center items-center h-full">
      <div className="flex flex-col w-fit items-center gap-10">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <div className="flex flex-col gap-6 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 bg-transparent border-2 border-white rounded-md p-3 px-5 text-lg"
            placeholder="Email address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 bg-transparent border-2 border-white rounded-md p-3 px-5 text-lg"
            placeholder="Password"
          />
          <div className="flex items-center w-80 justify-center bg-blue-500 rounded-md px-5 py-3 cursor-pointer">
            Continue
          </div>
          <div className="flex flex-row gap-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </div>
          <div className="flex flex-row items-center w-80">
            <hr className="flex-grow border-t border-white" />
            <span className="mx-2 text-white">or</span>
            <hr className="flex-grow border-t border-white" />
          </div>
          <GoogleLogin isLogin={true} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
