import React from 'react';
import {Container} from "@mui/material";
import {Bar} from "../Components/Bar";
import {BodyContacts} from "../Components/BodyContacts";

export const Contacts = () => {
    return (
        <Container maxWidth='1440px'
                   sx={{maxHeight: '1024px'}}>
            <Bar/>
            <BodyContacts/>
        </Container>
    );
};