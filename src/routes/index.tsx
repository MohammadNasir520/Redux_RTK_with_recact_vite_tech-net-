
import {
  createBrowserRouter,
} from "react-router-dom";

import NotFound from "../page/NotFound";
import Home from "../page/Home";
import Login from "../page/Login";
import App from "../App";
const routes= createBrowserRouter([
  {
    path: "/",
    element:<App></App> ,
  },
  {
    path: "/login",
    element:<Login/> ,
  },
  {
    path: "*",
    element:<NotFound></NotFound> ,
  },
]);

export default routes