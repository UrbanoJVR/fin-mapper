import React, {useState} from 'react';
import TopMenu from "../topMenu/app-bar";
import {Button, Card, Grid, IconButton} from "@mui/material";
import { useTheme } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

function CategoriesDashboard() {
    const theme = useTheme();
    const [cards, setCards] = useState([
        { id: 1, content: 'Contenido 1' },
        { id: 2, content: 'Contenido 2' },
        { id: 3, content: 'Contenido 3' },
    ]);
    const handleClick = (id: number) => {
        // Acción a ejecutar cuando se hace clic en una tarjeta
        console.log(`Tarjeta ${id} clicada`);
    };
    const handleAddCard = () => {
        // Acción a ejecutar cuando se hace clic en la tarjeta de añadir nueva
        const newCard = { id: cards.length + 1, content: `Contenido ${cards.length + 1}` };
        setCards([...cards, newCard]);
    };

    return (
        <>
            <TopMenu/>
            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{width: '80%', margin: 'auto'}}>
                {cards.map((card) => (
                    <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: theme.palette.primary.light,
                                color: theme.palette.primary.contrastText,
                            }}
                        >
                            <div>
                                <p>{card.content}</p>
                            </div>
                            <Button onClick={() => handleClick(card.id)}>Ver Detalles</Button>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Button
                        onClick={handleAddCard}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default CategoriesDashboard;