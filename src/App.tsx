import React from 'react';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CategoriesDashboard from './categories/categories-dashboard';
import {Route, Routes} from "react-router-dom";
import Home from "./home/home";

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>

            <Routes>
                <Route path="/cat1" element={<CategoriesDashboard/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <CssBaseline/>
        </ThemeProvider>
    );
}

export default App;
