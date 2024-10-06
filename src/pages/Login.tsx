import LoginForm from '../features/auth/components/LoginForm';
import LoginImage from '../assets/login-img.jpg';
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* container */}
      <div className="md:relative w-full min-h-80 md:w-[70vw] md:min-h-[70vh] flex flex-col justify-center items-center rounded-lg overflow-hidden">
        {/* form */}
        <div className="md:absolute md:left-0 md:z-20 rounded-lg md:rounded-none p-8 w-full md:w-1/2 md:min-h-[70vh] bg-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold  text-center">Sign In</h1>
          <p className="text-gray-400 text-center mt-3 mb-6">
            Welcome back! Please enter your account details
          </p>
          <LoginForm />
        </div>
        {/* image */}
        <div className="absolute hidden md:block right-0 w-2/3">
          <img
            src={LoginImage}
            alt="Login Image"
            className=" object-cover min-h-[70vh] object-center rounded-lg"
          />
        </div>
        {/* gradient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white from-55% "></div>
      </div>
    </div>
  );
};

export default Login;
