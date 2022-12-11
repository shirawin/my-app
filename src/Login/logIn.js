import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './logIn.css'

const SignIn =()=>{
return (
    <div>
        <h1>כניסה למערכת</h1>
        <div className='div-personal-detailes'>
        <TextField id="outlined-basic" label="שם" variant="outlined" />
        <TextField id="outlined-basic" label="סיסמה" variant="outlined"   type='password'/>
        </div>

        <div className='ok-div-Wrap'>
                    <span></span>
                    <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" onClick={()=>{
                        alert('האם אתה בטוח?')} }>אישור</Button>
    </div>
    </div>
    
    
);
}
export default SignIn