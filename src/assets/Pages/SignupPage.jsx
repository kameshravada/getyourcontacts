import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { LoadingOverlay } from "@mantine/core";
import { toast } from "react-toastify";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { backendURL } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setLoading(true);
    try {
      //regiester API
      const response = await axios.post(`${backendURL}/register`, {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/login");
        toast.success("Account created successfully Please login.", {
          className: "!bg-white !text-green-600 !shadow",
        });
      } else {
        toast.error("Email already exists", {
          className: "!bg-white !text-red-600 !shadow",
        });
      }
    } catch (error) {
      toast.error(error.message, {
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
        <h1 className="text-base md:text-xl lg:text-2xl">Sign up</h1>
        <form
          onSubmit={onSubmitHandler}
          action=""
          method="post"
          className="flex flex-col  justify-center items-center"
        >
          <div className="mt-10 flex flex-col md:w-[150%] gap-7 ">
            <div className=" ">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className=" flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="janesmith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" ">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email (will be Username)
              </label>
              <div className="mt-2">
                <div className=" flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="janesmith@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className=" ">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="your new password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    className="pr-2 cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? (
                      <IconEye stroke={1} className="text-black/70" />
                    ) : (
                      <IconEyeClosed stroke={1} className="text-black/70" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className=" ">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-teal-800">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="your confirm password"
                  />
                </div>
              </div>
            </div> */}
          </div>
          <button
            type="submit"
            className="rounded-4xl bg-teal-950 text-white px-4 py-1 mt-9 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : "sign up"}
          </button>
        </form>
        <h1 className="mt-4">
          Already have an account ?
          <span>
            <Link to={"/signin"} className="underline">
              signin
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignupPage;
