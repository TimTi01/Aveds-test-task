import React from 'react';
import {Card, CardContent, Divider, Grid, Typography} from "@mui/material";

export const BodyCard = ({title, text, svg}) => {
    return (
        <Card sx={{width: '328px', height: '248px'}}>
            <CardContent>
                <Grid container flexDirection='column' pl='24px' pt='19px'>
                    <Grid item>
                        {svg}
                    </Grid>

                    <Grid item pt='20px'>
                        <Typography>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item pt='20px'>
                        <Divider color='#E74040' sx={{width: '50px', height: '2px'}}/>
                    </Grid>
                    <Grid item pt='20px'>
                        <Typography>
                            {text}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};