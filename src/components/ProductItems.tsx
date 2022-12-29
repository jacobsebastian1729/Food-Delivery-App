import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from "@mui/material";
import { grey } from '@mui/material/colors';

import { Product } from "../App";
import { width } from "@mui/system";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));




type ProductItem = {
    prop: Product;
    addFavorite: Product[];
    setAddFavorite: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductItems({prop, addFavorite, setAddFavorite}: ProductItem){
    const [expanded, setExpanded] = React.useState(false);
    

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function seFavColor(): string{
        let itemchek = addFavorite.every((item) =>{
            return item.idMeal !== prop.idMeal;
        });
        
        if(itemchek){
            return "grey";
        }
        else{
            return "red";
        }
    }


    function favoriteList(){
        if (addFavorite.length === 0){
            setAddFavorite(oldArray => [...oldArray, prop]);
            
        }
        else{
            let itemchek = addFavorite.every((item) =>{
                return item.idMeal !== prop.idMeal;
            });
            
            if(itemchek){
                setAddFavorite(oldArray => [...oldArray, prop]);
                
            }
            else{
                
            }
            
        }
    }
    
    return <div>
    
        <Grid item style={{ padding: 10, width: 340}} >    
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {prop.strMeal[0]}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={prop.strMeal}
                    subheader={prop.strCategory}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={prop.strMealThumb}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Ingredients
                    </Typography>
                    <Typography paragraph>
                    1.{prop.strIngredient1}: {prop.strMeasure1}<br/>
                        2.{prop.strIngredient2}: {prop.strMeasure2}<br/>
                        3.{prop.strIngredient3}: {prop.strMeasure3}<br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" style={{ color: seFavColor()}} onClick={favoriteList}>
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        {prop.strInstructions}
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    
    </div>
}