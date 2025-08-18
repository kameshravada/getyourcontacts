import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { backendURL, setIsLoggedIn, setContacts } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setLoading(true);
    try {
      //Login API
      const response = await axios.post(`${backendURL}/login`, {
        email,
        password,
      });
      //console.log(response);
      if (response.status === 200) {
        setIsLoggedIn(true);
        toast.success("Login successfull.", {
          className: "!bg-white !text-green-600 !shadow",
        });
        //getUserData();
        navigate("/user");
      } else {
        toast.error("Email/password Incorrect", {
          className: "!bg-white !text-red-600 !shadow",
        });
      }
      //fetching contacts

      try {
        const fetchContacts = await axios.get(
          backendURL + "/contacts",
          {},
          { withCredentials: true }
        );
        setContacts(fetchContacts.data); // assuming this is a list of contacts
      } catch (err) {
        console.log(err, err.message);
        toast.error("Failed to fetch contacts:", err.message, {
          className: "!bg-white !text-red-600 !shadow",
        });
      }
    } catch (error) {
      toast.error("Wrong Credentials", error.message, {
        className: "!bg-white !text-red-600 !shadow",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="min-w-[50%] lg:min-w-[35%] p-10 bg-white shadow-2xl rounded-2xl min-h-[50%] flex flex-col items-center">
        <div className="w-full flex justify-end cursor-pointer  ">
          <Link to={"/"}>X</Link>
        </div>
        <h1 className="text-base md:text-xl lg:text-2xl">Sign in</h1>
        <form
          action=""
          method="post"
          className="flex flex-col  justify-center items-center"
          onSubmit={onSubmitHandler}
        >
          <div className="mt-10 flex flex-col md:w-[150%] gap-7 ">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                email
              </label>
              <div className="mt-2">
                <div className=" flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="janesmith@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="block cursor-pointer underline text-sm/6 font-medium text-gray-900">
              Forgot Password ?
            </div>
          </div>
          <button
            type="submit"
            className="rounded-4xl bg-teal-950 text-white px-4 py-1 mt-9 cursor-pointer"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <h1 className="mt-4">
          Don't have an account ?
          <span>
            <Link to={"/signup"} className="underline">
              {" "}
              signup
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SigninPage;
