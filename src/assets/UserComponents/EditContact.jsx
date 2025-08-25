import { TextInput } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { IconArrowLeft, IconArrowNarrowLeft } from "@tabler/icons-react";

const EditContact = () => {
  const { id } = useParams();
  const { contacts, backendURL, setContacts } = useContext(AppContext);
  const navigate = useNavigate();

  // Find the contact
  const contact = contacts?.find((c) => String(c.id) === String(id));

  // States
  const [updatedContact, setUpdatedContact] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync state when contact is found
  useEffect(() => {
    if (contact) {
      setUpdatedContact(contact);
      setLoading(false);
    } else {
      setLoading(false); // prevent infinite "loading"
    }
  }, [contact]);

  // Handle form changes
  const handleChange = (field, value) => {
    setUpdatedContact((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Update contact
  const updateContact = async () => {
    try {
      const response = await axios.put(`${backendURL}/update`, updatedContact, {
        withCredentials: true,
      });
      console.log("Contact updated:", response.data);
      setContacts((prevContacts) =>
        prevContacts.map((c) =>
          String(c.id) === String(id) ? response.data : c
        )
      );
      toast.success("Contact updated successfully!");
      navigate(`/user/details/${id}`);
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Failed to update contact.");
    }
  };

  // Handle loading or missing contact
  if (loading) {
    return <div className="p-10">Loading contact...</div>;
  }

  if (!updatedContact) {
    return <div className="p-10 text-red-500">Contact not found.</div>;
  }

  return (
    <div>
      {/* Back button */}
      <div className="py-4 px-8 w-fit">
        <div
          id="iconleft"
          className="cursor-pointer hover:bg-gray-200 rounded-full p-3 flex justify-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IconArrowNarrowLeft />
        </div>
      </div>

      {/* Edit form */}
      <div className="p-10 py-20 pl-15 md:px-12 md:py-8 min-w-fit max-w-[60%] flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">Edit Contact</h2>

        <TextInput
          label="Name"
          placeholder="Enter name"
          value={updatedContact.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextInput
          mt="md"
          label="Email"
          placeholder="Enter email"
          value={updatedContact.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <TextInput
          mt="md"
          label="Phone"
          placeholder="Enter phone number"
          value={updatedContact.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <div className="flex justify-end">
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={updateContact}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
