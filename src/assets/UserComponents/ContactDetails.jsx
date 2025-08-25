import { Avatar, ScrollArea } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconArrowNarrowLeft,
  IconCheck,
  IconCopy,
  IconMail,
  IconPencil,
  IconPhone,
  IconTrash,
} from "@tabler/icons-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Contacts } from "../Data/ContactsData";
import { AppContext } from "../../Context/AppContext";

const ContactDetails = ({ details, setDetails, setShowDetails }) => {
  const { contacts } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState(null);
  const [copied, setCopied] = useState(false);

  const isLarge = useMediaQuery("(min-width: 1024px)"); // lg breakpoint
  const isMedium = useMediaQuery("(min-width: 768px)");

  const size = isLarge ? 175 : isMedium ? 110 : 80;

  useEffect(() => {
    if (contacts?.length > 0) {
      const found = contacts.find((c) => String(c.id) === String(id));
      if (!found) {
        // Optional: redirect if contact not found
        navigate("/user");
      } else {
        setContact(found);
      }
    }
  }, [contacts, id, navigate]);

  if (!contact) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Loading contact details...
      </div>
    );
  }

  //const contact = contacts.find((c) => String(c.id) === String(id));

  

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.phone);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    //<div className="max-w-full">
    <div className=" bg-white p-6 ">
      {/* rounded-l-2xl w-full h-[90vh] md:!h-[96%] shadow */}
      <div className="sticky top-0 mb-4 flex justify-between items-center gap-5 z-1  w-[100%] bg-white">
        <div
          id="iconleft"
          className="cursor-pointer hover:bg-gray-200 rounded-full p-3 flex justify-center"
          onClick={() => {
            navigate("/user");
            //console.log("clicked on arrow");
          }}
        >
          <IconArrowNarrowLeft />
        </div>
        <div className=" flex md:gap-5 lg:pr-8 justify-center items-center">
          <Link to={`/user/edit/${id}`}>
            <button className="flex justify-center gap-2 bg-[#0b57d0] text-white py-2 px-3 rounded-3xl cursor-pointer">
              <IconPencil overlineThickness={"2px"} size={20} />
              <span className="text-sm">Edit</span>
            </button>
          </Link>
          <button className="hover:bg-gray-200 rounded-full p-3 cursor-pointer">
            <IconTrash />
          </button>
        </div>
      </div>
      <div className="border-b flex gap-6 md:gap-8 items-center pb-6">
        <div className="">
          <Avatar name={contact.name} src={""} color="initials" size={size} />
        </div>
        <div className="text-3xl ">{contact.name}</div>
      </div>
      <div className="flex flex-col gap-3 mt-8 p-6 bg-[#f0f4f9] md:w-[50%] rounded-2xl">
        <div className="text-xl pb-5">Contact Details</div>
        <div className="flex gap-3 md:gap-4 items-center">
          <IconPhone />
          <a href={`tel:+91${contact.phone}`}>{contact.phone}</a>
          {copied ? (
            <IconCheck size={15} className="text-green-500" />
          ) : (
            <IconCopy
              size={15}
              className="cursor-pointer hover:text-blue-500"
              onClick={handleCopy}
            />
          )}
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4 items-center">
          <div className="">
            <IconMail />
          </div>
          <div className="text-[13px] sm:text-base">
            {contact.email != "" ? (
              <a href={`mailto:${contact.email}`} className="text-[#228be6]">
                {contact.email}
              </a>
            ) : (
              <a className="text-black">-</a>
            )}
          </div>
        </div>
      </div>
    </div>
    //</div>
  );
};

export default ContactDetails;
