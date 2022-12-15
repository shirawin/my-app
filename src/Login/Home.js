import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SignIn from './logIn';
import SignUp from './signUp';
// import Adv from '../ManagePage/Helped/adv';
import Request from '../ManagePage/Helped/request'
import './Home.css'
import UpdateDetails from '../PersonalArea/UpdateDetails'


const Home =()=>{
    const [signIn,setSignIn] =useState(false)
    const [signUp,setSignUp] =useState(false)
    const [showBtns,setShowBtns]=useState(true)

const hideSignIn =()=>{
    setSignIn(true);
    setShowBtns(false)
}
const hideSignUp =()=>{
    setSignUp(true);
    setShowBtns(false)
}
return (
    <>
    <UpdateDetails/> 
   {/* {showBtns&&
    <div className="btnWrap" row>
    <Button style={{backgroundColor: '#ff9100', color:'white'}} className='btns' onClick={(hideSignUp)}>
        הרשמה
    </Button>
    <Button style={{backgroundColor: '#ff9100' , color:'white'}} className='btns' onClick={(hideSignIn)}>
        התחברות
    </Button>
    </div>
    }
    {signIn&&
    <SignIn/>
    }
    {signUp&&
    <SignUp/>
    } */}
    </>
)
}
export default Home