import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import FindParters from "../pages/FindPartners/FindParters";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        // path:'/home',
        element: <Home />,
      },
      {
        path: "/find-partner",
        element: <FindParters />,
      },
      {
        path: "/create-profile",
      },
    ],
  },
  {
    path: "/auth-layout",
    element: <AuthLayout />,
    children: [
      {
        index:true,
        // path: "/auth-layout/login",
        element: <Login />,
      },
      {
        path: "/auth-layout/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
