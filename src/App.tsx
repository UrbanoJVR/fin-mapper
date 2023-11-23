import React from 'react';
import './App.css';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Card className="custom-card">
              <CardContent>
                  <Typography variant="h4" fontWeight="bold">
                      FinMapper
                  </Typography>
                  <div className="button-container">
                      <Button>
                          Gestionar Categorías
                      </Button>
                      <Button>
                          Cargar Archivo
                      </Button>
                  </div>
              </CardContent>
          </Card>
      </ThemeProvider>
  );
}

export default App;
