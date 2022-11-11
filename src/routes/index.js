import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../content";
//import Sobre from "./Sobre";
//import Usuario from "./Usuario";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           
       </BrowserRouter>
   )
}

export default Routes;