import React, {useState} from 'react';
import {Box, Button, Container, Dialog, DialogContent, Grid, Typography} from "@mui/material";
import {BodyCard} from "./BodyCard";
import {FormLogin} from "./FormLogin";
import {useHistory} from "react-router-dom";
import {SvgCancerTreatment, SvgEmergencyCase, SvgOnlineReception} from "../SvgIcons/Svg";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    containerBreakpoints: {
        '&&': {
            padding: '96.5px 198px 256px 197px',
            [theme.breakpoints.down( 376)]: {
                padding: '55px 10px 62px',
            },
        }
    },
    h1Breakpoints: {
        '&&': {
            fontSize:'58px',
            fontWeight:'700',
            lineHeight:'80px',
            [theme.breakpoints.down( 376)]: {
                fontSize: '28px',
                lineHeight: '39px',
            },
        }
    },
    gridWrapBreakpoints: {
        width: '100%',
        justifyContent: 'space-between',
        [theme.breakpoints.down( 376)]: {
            justifyContent: 'center',
        },
    },
    gridItemBreakpoints: {
        '&&': {
            [theme.breakpoints.down( 376)]: {
                paddingTop: '30px',
            },
        }
    }
}));

let cards = [
    {
        id: 0,
        title: 'Онлайн приём',
        text: 'Текст карты онлайн приёма',
        svg: <SvgOnlineReception/>
    },
    {
        id: 1,
        title: 'Экстренный Случай',
        text: 'Текст карты экстренного случая',
        svg: <SvgEmergencyCase/>
    },
    {
        id: 2,
        title: 'Лечение рака',
        text: 'Текст карты лечения рака',
        svg: <SvgCancerTreatment/>
    },
]

export const Body = () => {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)
    const history = useHistory()

    const handleClickOpen = () => {
        setOpenForm(true);
    };
    const handleClose = () => {
        setOpenForm(false);
    };

    return (
        <Container disableGutters
                   maxWidth='xl'
                   className={classes.containerBreakpoints}
        >
            <Grid container>
                <Grid item>
                    <Typography className={classes.h1Breakpoints}>
                        Место для получения <br/> медицинской помощи
                    </Typography>
                </Grid>

                <Grid container item mt='35px'>
                    <Box display='flex'
                         width='128px'
                         height='52px'
                         mr='10px'
                    >
                        <Button variant='contained'
                                fullWidth
                                sx={{backgroundColor: '#FF685B',
                                    '&:hover':{backgroundColor: '#FF685B'}}}
                                onClick={() => handleClickOpen()}
                        >
                            Войти
                        </Button>
                        <Dialog
                            open={openForm}
                            onClose={handleClose}
                        >
                            <DialogContent>
                                <FormLogin/>
                            </DialogContent>
                        </Dialog>
                    </Box>

                    <Box display='flex'
                         width='155px'
                         height='52px'
                    >
                        <Button variant='outlined'
                                fullWidth
                                onClick={() => history.push('/contacts')}
                                sx={{color: '#FF685B', border: '1px solid #FF685B',
                                    '&:hover':{backgroundColor: 'rgb(210 25 25 / 4%)',
                                        border: '1px solid #FF685B'}}}
                        >
                            Контакты
                        </Button>
                    </Box>
                </Grid>

                <Grid container item mt='96.5px' className={classes.gridWrapBreakpoints}>
                    {cards.map((card) => (
                        <Grid item key={card.id} className={classes.gridItemBreakpoints}>
                            <BodyCard title={card.title} text={card.text} svg={card.svg}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};