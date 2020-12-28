import React, { useEffect, useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebaseApp, { provider } from '../../firebase';
import './Login.css';
import { IconButton, Input } from '@material-ui/core';
import { LoginContext } from './LoginContext';
 
 

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        height:"100%"
        
    },
    submit: {
        marginTop: '5px',
        backgroundColor: "#ed7d31",
        color: "white",
       
       
    },
    contained: {
        "&:hover": {
          backgroundColor: "#de6310"
        }
      },
}));


function Login(props) {
   
    const classes = useStyles();
    const [user, setUser] = useContext(LoginContext);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [Emailerror, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [signup, setSignup] = useState("");

const handleLogin = ()=>{
    clearErrors();
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        handleHomeRoute();
    }).catch(error=>{
        switch(error.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(error.message);
                console.log("error")
                break;
            case "auth/wrong-password":
                setPasswordError(error.message);
                console.log("error")
                break;
            
        }
    })
    console.log(`user is: ${user.email}`)
}

const handleLogout= ()=>{
    firebaseApp.auth().signOut();
    
}

const authListener = ()=>{
    firebaseApp.auth().onAuthStateChanged((user)=>{
        if(user){
            clearInputs();
            setUser(user);
        }
        else{
            setUser("");
        }
    })
}



useEffect(()=>{
    authListener(); //on app starting check if user is available or not
},[]);


    const handleEmail = (e)=>{
        setEmail(e.target.value); 
        console.log(email);
   }
   const handlePassword = (e)=>{
    setPassword(e.target.value);
     
   }

   const clearInputs = ()=>{
    setEmail('');
    setPassword('');
}

const clearErrors = ()=>{
  setEmailError('');
  setPasswordError('');
}

const handleHomeRoute=()=>{
    window.location.assign("/");
}

    return (
        <div  style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
            { 
            
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography style={{marginBottom:"15px"}} component="h1" variant="h5">
                   {signup?"Sign up Blood Bank!": "Sign in Blood Bank!"}
        </Typography>
                <form className={classes.form} >
                    <TextField
                        variant="outlined"
                        
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmail}
                    />
                    <p className="errorMsg">{Emailerror}</p>
                    <TextField
                        variant="outlined"
                        
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <p className="errorMsg">{passwordError}</p>
                   
                  { <Button
                        
                        fullWidth
                        variant="contained"
                         
                        className={`${classes.submit} ${ classes.contained}`}
                        onClick={handleLogin}
                    >
                        Sign In
          </Button> }  
          
                </form>
            </div>
            {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            {user && <Button onClick={handleLogout}>
                    <h4 style={{color:"red"}}>Log Out</h4>
                </Button>}
        </Container>
            }
        </div>
    );
}
export default Login;