import React from "react";

const Card = (props) => {
    const { prod } = props;
    return (
        <div className="card">
            <li><b>Nom: </b>{prod.nom}</li>
            <li><b>Prix: </b>{prod.prix}</li>
            <li><b>Catégorie: </b>{prod.categorie}</li>
        </div>
    )

}

export default Card; 