
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Ajout from "./pages/Ajout";
import Categories from "./pages/Categories";
import Ordre from "./pages/Ordre";
import Produits from "./pages/Produits";


const App = () => {
    return (
      <BrowserRouter>
         <Switch>
          <Route path="/" exact component={Produits} />
          <Route path="/ajout" exact component={Ajout} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/ordre" exact component={Ordre} />
         </Switch>
      </BrowserRouter>
        
        
    )
}

export default App;