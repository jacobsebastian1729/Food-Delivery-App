import React from "react";
import { useEffect } from "react";
import { Product } from "../../App";

import {TextField } from "@mui/material";
import { Grid } from "@mui/material";

import ProductItems from "../../components/ProductItems";

const url:string = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

type UserIn = {
    userUrl: string;
    setUserUrl: React.Dispatch<React.SetStateAction<string>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    addFavorite: Product[];
    setAddFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Recipe({userUrl, setUserUrl, products, setProducts, addFavorite, setAddFavorite}: UserIn){
    
    function userInputHandler(event: React.ChangeEvent<HTMLInputElement>){
    setUserUrl(url.concat(event.target.value));    
    }

    useEffect(() =>{
        fetch(userUrl)
        .then((response) => response.json() )
        .then((data) => setProducts(data.meals))
        .catch((error) => console.log(error));
      },[userUrl]);

    //console.log(products.length,"products");
    //console.log(userUrl,"url");
    return <div>
        <TextField
          id="outlined-helperText"
          label="Please enter the name"
          defaultValue=""
          helperText="suggestions: pizza, pork, lamb...."
          onChange={userInputHandler}
        />
        <Grid container spacing={-2}  alignItems="center" justifyContent="center">
        {
            (products)
            ?products.map((item) => {
                return <ProductItems key = {item.idMeal} prop = {item} addFavorite = {addFavorite} setAddFavorite = {setAddFavorite}/>
            } )
            :<div>No item found</div>
            
        }
        </Grid>
        

    </div>
}