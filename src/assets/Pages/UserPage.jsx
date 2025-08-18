import React, { useContext, useEffect, useMemo, useState } from "react";
import UserHeader from "../UserComponents/UserHeader";
import UserBody from "../UserComponents/UserBody";
import { Contacts } from "../Data/ContactsData";
import { AppContext } from "../../Context/AppContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UserPage = () => {
  const {
    userData,
    contacts,
    setContacts,
    backendURL,
    searchValue,
    setSearchValue,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchContacts = async () => {
      if (!userData?.email) return;

      try {
        const fetchContacts = await axios.get(
          backendURL + "/contacts",
          {withCredentials:true},
          {}
        );
        //console.log("its executing while refresh")
        setContacts(fetchContacts.data); // assuming this is a list of contacts
      } catch (err) {
        toast.error("Failed to fetch contacts:", err.message, {
          className: "!bg-white !text-red-600 !shadow",
        });
        console.log(err);
        console.log(err.message);
      }
    };

    fetchContacts();
  }, [userData]);


  return (
    <div className="bg-[#f8fafd] !h-screen">
      <UserHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <UserBody />
    </div>
  );
};

export default UserPage;
