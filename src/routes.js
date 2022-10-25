import React from "react";
import {Route, BrowswerRouter} from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Routes = () => {
    return (
        <BrowswerRouter>
        <Route component = {Home} path= "/" exact />
        <Route component = {Sobre} path= "/Sobre" />
        <Route component = {Usuario} path= "/Usuario" />
        </BrowswerRouter>
    )
}

export default Routes;