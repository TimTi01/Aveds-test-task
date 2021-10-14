import React, {useState} from 'react';
import {AppBar, Box, Button, Dialog, DialogContent, Toolbar, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";
import {FormLogin} from "./FormLogin";
import {makeStyles} from "@material-ui/core/styles";
import {StylesProvider} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    appBreakpoints: {
        [theme.breakpoints.down( 376)]: {
            maxWidth: '375px',
            maxHeight: '79px',
        },
    },
    toolbar: {
        '&&': {
            height: '100%',
            padding: 0,
        },
    },
    logoBreakpoints: {
        '&&': {
            flexGrow: '1',
            color: '#252B42',
            fontSize: '24px',
            fontWeight: '600',
            paddingLeft: '71px',
            [theme.breakpoints.down(376)]: {
                flexGrow: '1',
                color: '#252B42',
                fontSize: '24px',
                fontWeight: '600',
                paddingLeft: '10px',
            }
        },
    },
    contactsBreakpoints: {
        '&&': {
            display:'flex',
            marginRight:'59px',
            fontSize:'15px',
            fontWeight:'600',
            [theme.breakpoints.down( 376)]: {
                marginRight: 0,
                paddingRight: '10px',
            },
        },
    },
    loginButtonBreakpoints: {
        '&&': {
            marginRight: '70px',
            [theme.breakpoints.down( 376)]: {
                maxWidth: '106px',
                maxHeight: '36px',
                marginRight: 0,
                paddingRight: '10px',
            },
        },
    },
}));


export const Bar = () => {
    const classes = useStyles()
    const [openForm, setOpenForm] = useState(false)
    const history = useHistory()

    const checkUrl= () => {
        if (window.location.pathname === '/') {
            handleClickOpen()
        } else {
            history.push('/')
        }
    }

    const handleClickOpen = () => {
        setOpenForm(true);
    };
    const handleClose = () => {
        setOpenForm(false);
    };

    return (
        <StylesProvider injectFirst>
            <AppBar className={classes.appBreakpoints}
                    position='static'
                    color='transparent'
                    style={{width: '100%', height: '79px'}}
                    sx={{boxShadow: 0, borderBottom: 1}}
            >
                <Toolbar style={{height: '100%'}} className={classes.toolbar}>
                    <Typography className={classes.logoBreakpoints}>
                        logo
                    </Typography>

                    <Box className={classes.contactsBreakpoints}
                         onClick={() => history.push('/contacts')}
                    >
                        <Button variant='text'
                                fullWidth
                                sx={{color: '#737373'}}
                        >
                            Контакты
                        </Button>
                    </Box>

                    <Box className={classes.loginButtonBreakpoints}
                         display='flex'
                         width='186px'
                         height='40px'
                         mr='46px'
                    >
                        <Button variant='outlined'
                                fullWidth
                                sx={{color: '#FF685B', border: '1px solid #FF685B',
                                    '&:hover':{backgroundColor: 'rgb(210 25 25 / 4%)', border: '1px solid #FF685B'}}}
                                onClick={() => checkUrl()}
                        >
                            {window.location.pathname === '/'
                                ?'Войти'
                                :'Выйти'
                            }
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
                </Toolbar>
            </AppBar>
        </StylesProvider>
    )
}
