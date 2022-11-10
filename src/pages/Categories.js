import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import Footer from "../components/Footer";


const Categories = () => {

    const [data, setData] = useState([]);
    const [catChoice, setCatChoice] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3005/produits").then((res) => setData(res.data));
    })

    const onChangeValue = (e) => {
        setCatChoice(e.target.value);
    }

    return (
        <div className="affichage">
            <Logo />
            <Navigation />
            <div className="sort-container" onChange={onChangeValue}>
                <input type="radio" value="Ordinateurs" name="cat" />Ordinateurs
                <input type="radio" value="Cellulaires" name="cat" />Cellulaires
                <input type="radio" value="Téléviseurs" name="cat" />Téléviseurs
            </div> 
            <div className="cancel">
                {catChoice && (<h5 onClick={() => setCatChoice("")}>Annuler le filtre</h5>)}
            </div>
            {data
                .sort((n,m) => m.value - n.value)//Tri descendant
                .filter((n) => n.categorie.includes(catChoice))//Filtre par dÃ©partement
                .map((p) => (//Affichage
                    <Card prod={p} key={p.id}/>
                ))
            } 
            <Footer />
        </div>
    )
}

export default Categories;