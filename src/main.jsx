import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./assets/Pages/HomePage.jsx";
import SignupPage from "./assets/Pages/SignupPage.jsx";
import SigninPage from "./assets/Pages/SigninPage.jsx";
import { AppContextProvider } from "./Context/AppContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// const root = createRoot(document.getElementById('root'))

// let allRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/signin",
//     element: <SigninPage/>,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage/>,
//   },
// ]);

// root.render(
//   <StrictMode>
//     <RouterProvider router={allRoutes} />
//   </StrictMode>
// );

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <GoogleOAuthProvider clientId="294980298308-064g4pu1kdhku67chhlfblvr7gm9mbjd.apps.googleusercontent.com">
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </GoogleOAuthProvider>
  //</StrictMode>,
);
