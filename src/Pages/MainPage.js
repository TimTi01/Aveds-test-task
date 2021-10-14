import React from 'react';
import {Container} from "@mui/material";
import {Bar} from "../Components/Bar";
import {BodyMainPage} from "../Components/BodyMainPage";

export const MainPage = () => {
    return (
        <Container maxWidth='1440px'
                   sx={{maxHeight: '1024px'}}>
            <Bar/>
            <BodyMainPage/>
        </Container>
    );
};