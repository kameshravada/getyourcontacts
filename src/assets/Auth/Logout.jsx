import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Cookies from "js-cookie";

const useLogout = () => {
  const navigate = useNavigate();
  const {backendURL}= useContext(AppContext)

  const logout = async () => {
    try {
      await axios.post(
        backendURL+"/logout",
        {},
        
      );

      // Optional: clear any local user data/context
      Cookies.remove("jwt")
      localStorage.clear(); // or context reset
      toast.success("Logged out Successfully", {
        className: "!bg-white !text-green-600 !shadow",
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Logout failed");
    }
  };

  return logout;
};

export default useLogout;
