import React, { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Favorite from "./pages/favorite/Favorite";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/NavBar";


import "./App.css";

const url:string = "https://www.themealdb.com/api/json/v1/1/search.php?s=lamb";

export type Product = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
}

function App() {

  const [userUrl, setUserUrl] = useState<string>("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  const [products, setProducts] = useState<Product[]>([]);
  const [addFavorite, setAddFavorite] = useState<Product[]>([]);

  //let newUrl = url.concat(userInput);
  //setUserUrl(url);
  //console.log(userUrl,"userUrl");
  //useEffect(() =>{
  //  fetch(url)
  //  .then((response) => response.json() )
  //  .then((data) => console.log(data.meals))
  //  .catch((error) => console.log(error));
  //},[]);

  return <div className="App">
    
    <NavBar addFavorite = {addFavorite}/>

    <Routes>
      <Route path="" element = {<Home />}></Route>
      <Route path ="/recipe" element = {<Recipe userUrl = {userUrl} setUserUrl = {setUserUrl} products = {products} setProducts = {setProducts}
                                        addFavorite = {addFavorite} setAddFavorite = {setAddFavorite}/>}></Route>
      <Route path="/favorite" element = {<Favorite addFavorite = {addFavorite}/>}></Route>
      <Route path="/contact" element = {<Contact/>}></Route>
    </Routes>
  </div>;
}

export default App;
