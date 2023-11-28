import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function TopMenu() {
    const navigate = useNavigate();
    const homePage = () => {
        navigate("/");
    }
    const categoriesPage = () => {
        navigate("/cat1");
    }


    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="#app-bar-with-responsive-menu"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            flexGrow: 1,
                                        }}
                                    >
                        FinMapper
                    </Typography>
                    <Button variant="contained" color="success" sx={{margin: 1}} onClick={homePage}>Home</Button>
                    <Button variant="contained" color="success" sx={{margin: 1}} onClick={categoriesPage}>Categorías</Button>
                    <Button variant="contained" color="success" sx={{margin: 1}}>Cargar archivo</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default TopMenu;