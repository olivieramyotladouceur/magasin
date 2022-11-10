import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const Ajout = () => {
    const [nom, setNom] = useState("");
    const [nbEmployes, setNbemployes] = useState();

    const addNewMagasins = () => {
        axios.post("http://localhost:3005/magasins", {
            name: nom,
            value: nbEmployes,
        });
        window.alert("Magasin ajouté");
    }

    return (
        <div className="ajout">
            <Logo />
            <Navigation />
            <h3>Ajouter un magasin</h3>
            <form onSubmit={(e) => addNewMagasins()}>
                <input
                type="text"
                placeholder="Lieu"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                ></input>
                <input
                type="number"
                placeholder="Nombre d'employés"
                value={nbEmployes}
                onChange={(e) => setNbemployes(e.target.value)}
                ></input>
                <input type="submit" value="Ajouter"/>
            </form>
            <Footer />
        </div>
    )
}

export default Ajout;