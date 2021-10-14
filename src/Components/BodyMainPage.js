import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";

export const BodyMainPage = () => {
    const history = useHistory()

    const goOut = () => {
        history.push('/')
    };

    return (
        <Container maxWidth='xl'>
            <Grid container mt='141px' pl='149px' pr='149px'>
                <Grid item>
                    <Typography fontSize='58px' fontWeight='700'>
                        Привет, Сергей
                    </Typography>
                </Grid>

                <Grid container item mt='35px'>
                    <Box display='flex'
                         width='228px'
                         height='52px'
                         mr='10px'
                    >
                        <Button variant='contained'
                                fullWidth
                                sx={{backgroundColor: '#FF685B',
                                    '&:hover':{backgroundColor: '#FF685B'}}}
                                onClick={() => goOut()}
                        >
                            Выйти из аккаунта
                        </Button>
                    </Box>

                    <Box display='flex'
                         width='228px'
                         height='52px'
                    >
                        <Button variant='outlined'
                                fullWidth
                                onClick={() => history.push('/contacts')}
                                sx={{color: '#FF685B', border: '1px solid #FF685B',
                                    '&:hover':{backgroundColor: 'rgb(210 25 25 / 4%)',
                                        border: '1px solid #FF685B'}}}
                        >
                            Перейти в контакты
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};