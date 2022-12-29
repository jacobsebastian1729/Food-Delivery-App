import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { Product } from '../App';
import { padding } from '@mui/system';

type FavoriteItem = {
    prop: Product;
}

export default function FavoriteList({prop}: FavoriteItem){
    return <div>

        <Card  sx={{ display: 'flex', padding: 2}} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {prop.strMeal}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {prop.strCategory}
                </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image= {prop.strMealThumb}
                alt=""
            />
            </Card>
    </div>
}