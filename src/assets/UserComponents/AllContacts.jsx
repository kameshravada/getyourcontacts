import { ScrollArea } from "@mantine/core";
import React, { useContext, useEffect, useMemo, useState } from "react";
import ContactRow from "./ContactRow";
import { IconRefresh } from "@tabler/icons-react";
import { Contacts } from "../Data/ContactsData";
import { AppContext } from "../../Context/AppContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";

const AllContacts = () => {
  const { contacts, setContacts, backendURL, userData, searchValue } =
    useContext(AppContext);

  const [status, setStatus] = useState(false);

  const email = userData ? userData.email : "";

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/contacts.readonly",
    onSuccess: async (tokenResponse) => {
      const googleToken = tokenResponse.access_token;
      // console.log(googleToken);
      // Call your Spring Boot backend with the token
      try {
        setStatus(true);
        const response = await axios.post(
          backendURL + "/google-import",
          {
            googleToken,
            email,
          },
          { withCredentials: true }
        );

        const googlecontacts = response.data; // The list of contacts returned from backend
        setContacts(googlecontacts);
        //console.log(response);
        //console.log("Contacts from backend:", contacts);
        setStatus(false);
        alert("Contacts synced successfully!");
      } catch (error) {
        setStatus(false);
        toast.error("Error in syncing contacts please relogin..", {
          className: "!bg-white !text-red-600 !shadow",
        });
        console.error("Error syncing contacts:", error);
      }
    },
    onError: () => {
      alert("Google Login Failed");
    },
  });

  const filteredAndSortedContacts = useMemo(() => {
    return contacts
      .filter((contact) =>
        contact.name?.toLowerCase().includes(searchValue.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts, searchValue]);

  return (
    <div>
      <ScrollArea className="rounded-l-2xl   w-full h-[90vh] md:!h-[96%]  bg-white">
        <div className="sticky top-0 mb-2 flex flex-col gap-5 z-1  w-[100%] bg-white p-6 !pb-0">
          <div className="text-2xl flex gap-3 items-center">
            <div>Contacts</div>
            <div className="text-sm font-semibold md:hidden">
              {contacts.length}+
            </div>
          </div>
          <div className="grid lg:grid-cols-[2fr_2fr_1fr_1fr] grid-cols-[1fr_1fr] border-b-1 border-black/30 pb-3 text-sm">
            <div className="">Name</div>
            <div className="hidden lg:block">Email</div>
            <div className="flex justify-center">Phone number</div>
            <div className="flex justify-center items-end">
              {/* <IconStarFilled size={18} opacity={"80%"} /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3  px-4">
          {filteredAndSortedContacts ? (
            filteredAndSortedContacts.map((contact, id) => (
              <ContactRow key={contact.id} {...contact} />
            ))
          ) : (
            <></>
          )}
        </div>
      </ScrollArea>
      <div
        className="absolute bottom-5 right-7 flex justify-center items-center gap-2 bg-green-600 p-2 px-3 rounded-xl text-white cursor-pointer"
        onClick={() => login()}
      >
        <IconRefresh className={`${status ? "animate-spin" : ""}`} />
        {status ? "syncing... " : "Sync"}
      </div>
    </div>
  );
};

export default AllContacts;
