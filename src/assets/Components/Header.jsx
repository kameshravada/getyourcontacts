import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full m-auto bg-amber-50 p-4 md:p-7 h-[12%] flex justify-between items-center text-black ">
      <h1 className=" text-lg md:text-xl lg:text-2xl font-semibold flex gap-3 justify-center items-center">
        <img src="/images/Sync-logo.png" alt="Sync" className="w-11"/>
        Sync
      </h1>
      <div className="justify-center conten items-center gap-3 hidden md:flex">
        <Link
          to={"/signin"}
          className="font-semibold cursor-pointer flex gap-3 justify-center text-black items-center underline bg-grey-600 border border-transparent rounded-md tems-center  py-2 px-3 hover:scale-103 transition ease-in-out duration-300"
        >
          Sign in
        </Link>
        <Link
          to={"/signup"}
          className="font-semibold cursor-pointer flex gap-3 justify-center text-black items-center underline bg-grey-600 border border-transparent rounded-md tems-center  py-2 px-3 hover:scale-103 transition ease-in-out duration-300"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
