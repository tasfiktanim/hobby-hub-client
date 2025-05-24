import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="w-full max-w-sm mx-auto px-4 md:px-0">
      <h2 className="font-bold text-lg mb-5 text-center md:text-left">
        Login With
      </h2>

      <div className="space-y-3">
        {/* Google Button */}
        <button className="w-full flex items-center justify-center md:justify-start gap-2 py-2 px-4 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition">
          <FcGoogle size={24} />
          <span className="hidden sm:inline">Login with Google</span>
        </button>

        {/* GitHub Button */}
        <button className="w-full flex items-center justify-center md:justify-start gap-2 py-2 px-4 border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50 transition">
          <FaGithub size={24} />
          <span className="hidden sm:inline">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
