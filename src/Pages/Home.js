import React from 'react';
import {Container} from "@mui/material";
import {Bar} from "../Components/Bar";
import {Body} from "../Components/Body";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    containerBreakpoints: {
        '&&': {
            maxWidth: '1440px',
            maxHeight: '1207px',
            padding: 0,
            [theme.breakpoints.down( 376)]: {
                maxWidth: '375px',
                maxHeight: '1207px',
                padding: 0,
            },
        }
    },
}));

export const Home = () => {
    const classes = useStyles()

    return (
        <Container className={classes.containerBreakpoints}>
            <Bar/>
            <Body/>
        </Container>
    );
};