import React from "react";
import { Typography, AppBar, Button, Card, CardActions,
CardContent, CardMedia, CssBaseline, Grid, TextField, Toolbar, Container } from "@mui/material";


export default function Contact(){
    return <div>
        <CssBaseline />
        <main>
            <div>

                <Container maxWidth = "sm">
                    <Typography variant="h4" align="center" color= "textPrimary" gutterBottom>Contact</Typography>
                    <Typography paragraph align="center" color = "textSecondary">
                        Text Field for adding contact information
                    </Typography>
                    

                </Container>
            </div>
        </main>
    </div>
}