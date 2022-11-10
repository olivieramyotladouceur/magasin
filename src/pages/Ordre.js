import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Ordre = () => {

    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3005/produits?_sort=prix&_order=${filter}`).then((res) => setData(res.data));
    }, [filter]);

    const onChangeValue = (e) => {
        setFilter(e.target.value);
    }

    return (
        <div className="affichage">
            <Logo />
            <Navigation />
            <div className="sort-container" onChange={onChangeValue}>
                <input type="radio" value="desc" name="filter" />Décroissant
                <input type="radio" value="asc" name="filter" />Croissant
            </div>

            <div className="cancel">
                {filter && (<h5 onClick={() => setFilter("")}>Annuler le filtre</h5>)}
            </div>

            {filter ? (
                <ul>
                    {
                    data.map((p) => (
                       <Card prod={p} key={p.id}/>
                    ))
                    }
                </ul>
            ) : (
                <h1>Apply a filter</h1>
            )}  
            <Footer />
        </div>
    )
}

export default Ordre;