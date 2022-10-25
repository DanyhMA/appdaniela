import React from "react";
import { Link } from "react-router-dom";

const Home=() =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <link to="/Sobre">Sobre</link>
                    </li>
                    <li>
                        <link to="/usuario">Usuário</link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;