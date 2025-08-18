import { Avatar } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const ContactRow = ({ setDetails, setShowDetails, ...prop }) => {
  return (
    <Link
      to={`/user/details/${prop.id}`}
      className="py-2 grid lg:grid-cols-[2fr_2fr_1fr_1fr] grid-cols-[1fr_1fr] font-sans text-sm cursor-pointer hover:bg-[#c2e7ff]/25 rounded px-2"
    >
      <div className="flex lg:gap-5 gap-2 items-center ">
        <Avatar name={prop.name} color="initials" />
        <div className="">{prop.name}</div>
      </div>
      <div className="lg:flex items-center hidden ">
        <div className="">{prop.email}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="">{prop.phone}</div>
      </div>
    </Link>
  );
};

export default ContactRow;
