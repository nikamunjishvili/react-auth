import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <div>
        <h1>This is Protected Routes!!</h1>
        {children}
      </div>
    );
  }

  return (
    <div>
      <Navigate to="/signup" />
    </div>
  );
};

export default ProtectedRoutes;
