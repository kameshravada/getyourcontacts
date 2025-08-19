import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import "@mantine/core/styles.css";

const HomePage = () => {
  return (
    <div>
      <div className="h-screen">
        <Header />
        <div className="w-full h-[88%]">
          <div className="w-full h-[90%] bg-gradient-to-b  from-amber-50 to-80%  flex justify-center items-center flex-col gap-9 md:gap-12">
            <h1 className="font-semibold text-center px-4 text-xl leading-8 md:text-4xl md:leading-13 lg:text-6xl lg:leading-23 text-black">
              get your contacts anywhere, <br className="" /> on any Device.
            </h1>
            <div className=" flex justify-center items-center gap-0 ">
              <Link
                to={"/signin"}
                className=" text-sm md:text-lg cursor-pointer flex gap-3 text-white items-center bg-gradient-to-r  from-teal-900 to-teal-800   rounded-l-4xl tems-center hover:bg-blue-700  py-2 px-3 pl-5 hover:scale-103 transition ease-in-out duration-300"
              >
                Sign in
              </Link>
              <Link
                to={"/signup"}
                className="text-sm md:text-lg cursor-pointer flex gap-3  text-white items-center bg-gradient-to-l from-sky-900 to-sky-800   rounded-r-4xl tems-center hover:bg-indigo-700  py-2 px-3 pr-5 hover:scale-103 transition ease-in-out duration-300"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className=" flex gap-5 underline justify-center ">
            <Link
              to="/privacy-policy"
              className="text-sm md:text-lg cursor-pointer text-black hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-sm md:text-lg cursor-pointer text-black hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
