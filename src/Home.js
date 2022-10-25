import React from "react";
import { Link } from "react-router-dom";

const Home=() =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/usuario">Usuário</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;