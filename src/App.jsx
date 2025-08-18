import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import HomePage from "./assets/Pages/HomePage";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import SignupPage from "./assets/Pages/SignupPage";
import SigninPage from "./assets/Pages/SigninPage";
import UserPage from "./assets/Pages/UserPage";
import AllContacts from "./assets/UserComponents/AllContacts";
import ContactDetails from "./assets/UserComponents/ContactDetails";
import { ToastContainer } from "react-toastify";
import Logout from "./assets/Auth/Logout";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css"; // Import default styles


const PrivateRoute = ({ children }) => {
  const jwt = Cookies.get("jwt"); // 'jwt' is your cookie key
  return jwt ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "poppins,sans-serif",
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/logout" element={<Logout />} />
            <Route element={<PrivateRoute/>}>
              <Route path="/user" element={<UserPage />}>
                <Route index element={<AllContacts />} />
                <Route path="/user/details/:id" element={<ContactDetails />} />
              </Route>
            </Route>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>

          {/* ✅ Toast container goes here, just once */}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            newestOnTop
            closeButton
            draggable
            theme="colored"
            icon={({ type }) => {
              switch (type) {
                case "success":
                  return "✅";
                case "error":
                  return "❌";
                default:
                  return "🔔";
              }
            }}
            // toastClassName={({ type }) =>
            //   type === "success"
            //     ? "bg-[#22bb33] flex p-3 text-white rounded shadow items-center justify-center"
            //     : type === "error"
            //     ? "bg-red-600 text-white rounded shadow"
            //     : "bg-gray-800 text-white rounded shadow"
            // }
          />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
