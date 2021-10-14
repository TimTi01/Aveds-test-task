import React from 'react';
import {Container, Grid, Typography} from "@mui/material";

export const BodyContacts = () => {
    return (
        <Container maxWidth='xl'>
            <Grid container mt='184.5px' pl='149px' pr='149px'>
                <Grid item>
                    <Typography fontSize='58px' fontWeight='700'>
                        Контакты
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};