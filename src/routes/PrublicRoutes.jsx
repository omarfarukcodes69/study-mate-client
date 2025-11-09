import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import FindParters from "../pages/FindPartners/FindParters";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import Profile from "../pages/Home/Profile";
import PartnerDetails from "../components/PartnerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // path:'/home',
        element: <Home />,
      },
      {
        path: "/find-partners",
        element: <FindParters />,
      },
      {
        path: "/create-profile",
        element: (
          <PrivetRoutes>
            <CreateProfile />
          </PrivetRoutes>
        ),
      },
      // {
      //   path: "/my-connection",
      //   element: (
      //     <PrivetRoutes>
      //       <MyConnection />
      //     </PrivetRoutes>
      //   ),
      // },
      {
        path: "/partner",
        element: <PartnerDetails />,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth-layout",
    element: <AuthLayout />,
    children: [
      {
        index: true,
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
