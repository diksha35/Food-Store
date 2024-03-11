import '../node_modules/bootstrap/dist/css/bootstrap.css';
;
import React from "react";
import ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
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



const AppLayout=()=>{
    return (<>
    <div className="app">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
    </>)
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)