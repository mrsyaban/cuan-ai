import GoogleLogin from '../../components/buttons/GoogleLogin';

const SignUpPage = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center h-full">
      <div className="flex flex-col w-fit items-center gap-10">
        <h1 className="text-3xl font-semibold">Create an account</h1>
        <div className="flex flex-col gap-6 items-center">
          <input type="email" className="w-80 bg-transparent border-2 border-white rounded-md p-3 px-5 text-lg" placeholder="Email address*" />
          <div className="flex items-center w-80 justify-center bg-blue-500 rounded-md px-5 py-3">Continue</div>
          <div className="flex flex-row gap-2">
            Already have an account?{" "}
            <a href="/free/login" className="text-blue-500">
              Login
            </a>
          </div>
          <div className="flex flex-row">
            <div className="h-4 bg-white"/>
            or
            <hr/>
          </div>
          <GoogleLogin isLogin={false}/>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
