import React from "react";
import { Link } from "react-router-dom";

import Badge from '@mui/material/Badge';

import './NavBar.css'
import logo from "../assets/chef.png"

import { Product } from "../App";

type Favorite = {
    addFavorite: Product[];
}

export default function NavBar({addFavorite}: Favorite){
    return <div className="navMain">
        <div className="navLogo">
            
            <img src = {logo} alt = ""/>
            <p>YUMMY</p>
        </div>
        <div className="navList">
            <ul className="navUl">
                <li className="navLi"><Link to='/'>Home</Link></li>
                <li className="navLi"><Link to='/recipe'>Recipe</Link></li>
                <Badge badgeContent={addFavorite.length} color = "primary">
                    <li className="navLi"><Link to='/favorite'>Favorite</Link></li>
                </Badge>
                <li className="navLi"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
}