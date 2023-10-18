import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import About from "../pages/About";
import App from "../App";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoutes>
        <App />
      // </ProtectedRoutes>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
