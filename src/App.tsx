import React from 'react';
import './App.css';
import {Button, Typography, Card, CardContent, Grid} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CategoriesDashboard from './categories/categories-dashboard';
import {Route, Routes, Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>

            <Routes>
                <Route path="cat1" element={<CategoriesDashboard/>}/>
            </Routes>

            <CssBaseline/>
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
            {/*<Switch>*/}
            {/*    /!* Agrega una ruta para CategoriesDashboard *!/*/}
            {/*    <Route path="/categories-dashboard" component={CategoriesDashboard} />*/}
            {/*</Switch>*/}
        </ThemeProvider>
    );
}

export default App;
