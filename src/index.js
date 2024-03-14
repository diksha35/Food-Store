import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
/**
 * Header
 * -Logo
 * -NavItems
 * Body
 * -search
 * -RestaurantContainer
 *      -RestaurantCard
 *      -Img
 *      -Name of Res, Star Rating
 * Footer-
 * -copyright
 * -Links
 * -address
 *- contact
 */

 

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
    { path: "/", element: <AppLayout /> , 
    children :[
        {
          path: "/", element : <Body/>
        },
      { 
        path:"/about", element :<About/>
      },
      {path:"/contact-us", element:<Contact/>}
    ]
    ,errorElement:<Error/>},
   
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
