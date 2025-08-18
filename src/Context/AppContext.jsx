import { createContext, useEffect, useState } from "react";
import { AppConstants } from "../Backend/AppConstants";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendURL = AppConstants.BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const contextValue = {
    backendURL,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    contacts,
    setContacts,
    searchValue,
    setSearchValue
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
