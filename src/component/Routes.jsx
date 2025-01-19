import { createBrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import Login from "./Login";
import Signup from "./Signup";

const router = createBrowserRouter([
   {
     path: "/login",
     element: <Auth/>,
     // Add custom logic or other settings here
   },
   {
    path: "/register",
    element: <Signup />,
    // Add custom logic or other settings here
  },
 ])
export default router