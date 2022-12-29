import React from "react";

import './Home.css';
import food from "../../assets/food.jpeg";
import cake from "../../assets/cake.avif";
import shrimp from "../../assets/shrimp.avif";
import pizza from "../../assets/pizza.webp";
import salad from "../../assets/salad.avif";
import chicken from "../../assets/chicken.avif";

export default function Home(){
    return <div className="home">
        <div className="homeDiv_1">
            <img src = {food} alt =""/>
            <p>HEALTHY DELICIOUS RECIPES</p>
        </div>
        <div className="homeDiv_2">
            <h1>Popular Food</h1>
            <p>We provide a variety
                of food and beverage recipe with 
                height tast from famous chefs.
            </p>
        </div>
        <div className="homeDiv_3">
            <img src= {cake} alt="" />
            <img src= {shrimp} alt="" />
            <img src= {pizza} alt="" />
            <img src= {salad} alt="" />
            <img src= {chicken} alt="" />

        </div>
        
        
        
    </div>
}