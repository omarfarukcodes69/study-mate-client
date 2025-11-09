import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);
  const location = useLocation();
  if (loading) {
    return <>Loading ....</>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth"}></Navigate>;
};

export default PrivetRoutes;
