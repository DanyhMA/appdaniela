import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home />} path= "/" exact />
                <Route element = {<Sobre />} path= "/Sobre" />
                <Route element = {<Usuario />} path= "/Usuario" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;