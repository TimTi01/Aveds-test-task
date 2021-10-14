import React, {useState} from 'react'
import {Button, Grid, TextField} from "@mui/material";
import {useHistory} from "react-router-dom";

export const FormLogin = ({login, setLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailError(false)
        setPasswordError(false)
        let passwordGood = false
        let emailGood = false

        if (email === '') {
            setEmailError(true)
            setEmailHelperText('Пропущено поле')
        } else if (email.length < 8) {
            setEmailError(true)
            setEmailHelperText('Email < 8 символов')
        } else {
            emailGood = true
        }

        if (password === '') {
            setPasswordError(true)
            setPasswordHelperText('Пропущено поле')
        } else if (password.length < 3) {
            setPasswordError(true)
            setPasswordHelperText('Пароль < 3 символов')
        } else {
            passwordGood = true
        }

        if (passwordGood && emailGood) {
            localStorage.setItem('Data', JSON.stringify({email, password}))
            history.push('/main-page')
        } else {
            console.log(`-Введённые данные-\nEmail: ${email}\nPassword: ${password}`)
        }
    }

    return (
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <Grid container flexDirection='column' alignItems='center'>
                <Grid item mt={1}>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        id="email-textField"
                        type='email'
                        label="Логин"
                        helperText={emailHelperText}
                        error={emailError}
                        size='small'
                        sx={{'& label.Mui-focused': {color: '#FF685B'},
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#FF685B',}}
                        }}
                    />
                </Grid>

                <Grid item mt={2}>
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        id="password-textField"
                        type='password'
                        label="Пароль"
                        helperText={passwordHelperText}
                        error={passwordError}
                        size='small'
                        sx={{'& label.Mui-focused': {color: '#FF685B'},
                            '& .MuiOutlinedInput-root': {'&.Mui-focused fieldset': {borderColor: '#FF685B',}}
                        }}
                    />
                </Grid>

                <Grid item mt={2}>
                    <Button variant="contained"
                            type='submit'
                            sx={{backgroundColor: '#FF685B', '&:hover':{backgroundColor: '#FF685B'}}}
                    >
                        Войти
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}