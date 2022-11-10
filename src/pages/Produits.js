//Importation de react
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";
import Footer from "../components/Footer";


const Produits = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/produits").then((res) => setData(res.data));
    })

    return (
        <div className="affichage">
            <Logo />
            <Navigation />
            <h1>Nos produits</h1>
            {data.map((p) => (
                <Card prod={p} key={p.id}/>
            ))}
            <Footer />
            
        </div>
    )
}

export default Produits;