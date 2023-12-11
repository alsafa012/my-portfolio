import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../MyProtFolio/HomePage/HomePage";

const myCreatedRouter = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout></MainLayout>,
       children:[
          {
               path: "/",
               element:<HomePage></HomePage>
          }
       ]
     },
   ]);

export default myCreatedRouter;