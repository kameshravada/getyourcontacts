import { ScrollArea } from "@mantine/core";
import React, { useContext, useState } from "react";
import ContactRow from "./ContactRow";
import { IconRefresh } from "@tabler/icons-react";
import ContactDetails from "./ContactDetails";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const UserBody = () => {
  const { contacts } = useContext(AppContext);
  return (
    <div className="grid md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr] xl:grid-cols-[19rem_1fr] !h-[87%] ">
      <ScrollArea className="h-full w-full bg-[#f8fafd] font-sans hidden md:block">
        <div className="h-[100%] w-full ">
          {/* <div className="flex pl-4 flex-col  items-start">
            <button className="px-4 py-3 lg:px-6  lg:py-4 my-2 bg-[#c2e7ff] rounded-2xl !font-semibold cursor-pointer">
              + &nbsp;Create Contact
            </button>
          </div> */}
          <div className="flex px-4 flex-col  items-start">
            <button className="!font-semibold px-3 lg:px-6 py-2 my-2 bg-[#c2e7ff] rounded-full flex justify-between w-[90%] cursor-pointer">
              Contacts
              <div className="">{contacts.length}+</div>
            </button>
          </div>
        </div>
      </ScrollArea>
      <ScrollArea className="rounded-l-2xl  w-full h-[90vh] md:!h-[96%] shadow bg-white">
        <Outlet />
      </ScrollArea>
    </div>

    // <div class="grid grid-cols-[18.5rem_1fr] bg-[#f8fafd]">
    //   <div class="#f8fafd sticky top-0 h-[100vh] flex flex-col items-start p-7 border-2 border-amber-500">
    //     <div className="">
    //       <h1 className=" text-lg md:text-xl lg:text-2xl font-semibold flex gap-3 justify-center items-center">
    //         <img
    //           src="/images/Sync-logo.png"
    //           alt="Sync"
    //           className="w-11"
    //         />
    //         Sync
    //       </h1>
    //     </div>
    //     <div className="">
    //       <ScrollArea className="h-full w-full">
    //         <div className="flex  flex-col  items-start">
    //           <button className="px-6 py-4 my-2 bg-[#c2e7ff] rounded-2xl !font-semibold cursor-pointer">
    //             + &nbsp;Create Contact
    //           </button>
    //         </div>
    //         <div className="flex flex-col  items-start">
    //           <button className="!font-semibold px-6 py-2  bg-[#c2e7ff] rounded-full flex justify-between w-[90%] cursor-pointer">
    //             Contacts
    //             <div className="">1098+</div>
    //           </button>
    //         </div>
    //       </ScrollArea>
    //     </div>
    //   </div>

    //   <div className="rounded-2xl p-3 w-full h-[100vh] mt-1"></div>
    // </div>
  );
};

export default UserBody;
