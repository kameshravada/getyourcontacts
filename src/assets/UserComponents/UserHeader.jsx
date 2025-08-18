import { Avatar, Input } from "@mantine/core";
import {
  IconLogout,
  IconMenu2,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import useLogout from "../Auth/Logout";

const UserHeader = () => {
  const { setUserData, userData, backendURL, searchValue,setSearchValue } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const logout=useLogout();

  

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(backendURL + "/profile", {
          withCredentials: true,
        });
        //console.log("api response", response);
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          toast.error("unable to retrieve profile", {
            className: "!bg-white !text-red-600 !shadow",
          });
        }
      } catch (error) {
        toast.error(error.message, {
          className: "!bg-white !text-red-600 !shadow",
        });
      }
    };
    getUserData();
  }, []);

  return (
    <div className="w-full m-0 h-fit py-4  flex justify-between items-center px-4  md:px-6">
      <div className=" flex items-center gap-3 ">
        {/* <div className="cursor-pointer hover:bg-gray-200 p-3 rounded-full md:hidden" >
          <IconMenu2 />
        </div> */}
        <div className=" lg:block lg:px-6">
          <div className=" text-lg md:text-xl lg:text-2xl font-semibold flex gap-3 justify-center items-center ">
            <img src="/images/Sync-logo.png" alt="Sync" className="w-11" />
            <h1 className="hidden md:block">Sync</h1>
          </div>
        </div>
      </div>
      <div className="">
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          leftSection={<IconSearch className="" size={20} opacity={50} />}
          rightSection={
            searchValue !== "" ? (
              <Input.ClearButton onClick={() => setSearchValue("")} />
            ) : undefined
          }
          rightSectionPointerEvents="auto"
          size="md"
          className="w-[12rem] md:w-[30rem] xl:w-[40rem] "
        />
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div className="hidden lg:block">
          <h4>{userData ? userData.name : "User"}</h4>
        </div>
        <div
          className="md:pr-3 cursor-pointer relative group"
          onClick={toggleMenu}
        >
          <Avatar src="avatar.png" name={userData.name?userData.name:"user"} color="initials" alt="it's me" />
          <div
            className={`px-2 py-1 bg-white rounded shadow-md absolute z-6 right-0 md:hidden md:group-hover:block transition-all duration-200 md:group-hover:          ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <ul className="text-sm flex flex-col w-full">
              <li className="flex gap-2 justify-start items-center hover:bg-black/5 p-2 rounded w-full">
                <IconSettings size={17} />
                {userData ? userData.name : "User"}
              </li>
              <li onClick={logout} className="flex gap-2 hover:bg-black/10 p-2 rounded">
                <IconLogout size={17} /> logout
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
