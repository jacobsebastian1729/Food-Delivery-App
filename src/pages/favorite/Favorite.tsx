import React from "react";

import { Typography, Grid } from "@mui/material";

import { Product } from "../../App";
import FavoriteList from "../../components/FavoriteList";

type FavoriteItem = {
    addFavorite: Product[];
}

export default function Favorite({addFavorite}: FavoriteItem){
    return <div>
        <Typography variant="h4" gutterBottom>
        Favorite Recipe List
      </Typography>
      <Grid container spacing={-2} display = "flex" flexDirection= "column" alignItems="center" justifyContent="center">
      {

        addFavorite.map((item) => {
            return <FavoriteList key = {item.idMeal} prop = {item}/>
        })
      }
      </Grid>
    </div>
}