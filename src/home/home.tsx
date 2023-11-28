import React from 'react';
import './home.css';
import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import TopMenu from "../topMenu/app-bar";

function Home() {
    return (
        <>
            <TopMenu/>
            <Card className="custom-card">
                <CardContent>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h4" fontWeight="bold">
                                FinMapper
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/cat1">
                                Gestionar categorías
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button>
                                Cargar Archivo
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default Home;