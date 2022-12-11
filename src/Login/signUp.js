
import React ,{ useState } from 'react'
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import './signUp.css'

const SignUp =()=>{
    const [volunteer, setVolunteer]=useState(false);
return (
    <div className="container">
    <h1>הרשמה למערכת</h1>
    <div className='div-user-type'>
    <RadioGroup row name="user-type" defaultValue="helped" className="user-type" >
      <FormControlLabel value="helped" label="נעזר" onClick={()=>setVolunteer(false)} control={<Radio style={{color: '#ff9100'}}/>} style={{color: '#a1a1a1'}}/>
      <FormControlLabel value="volunteer" label="מתנדב" onClick={()=>setVolunteer(true)} control={<Radio style={{color: '#ff9100'}}/>} style={{color: '#a1a1a1'}}/>
    </RadioGroup>
    </div>
    <div className='div-wrp'>
    <div className='div-title'>
        פרטים אישיים:
    </div>
    <div className='div-personal-detailes'>
    <TextField id="outlined-basic" label="שם" variant="outlined" />
    <TextField id="outlined-basic" label="טלפון נייד" variant="outlined" />
    </div>
    <div className='div-personal-detailes'>
    <TextField id="outlined-basic" label="אי-מייל" variant="outlined"  />
    <TextField id="outlined-basic" label="סיסמה" variant="outlined" />
    </div>
    <div className='div-title'>
        כתובת:
    </div>
    <div className='div-address'>
    <TextField id="outlined-basic" label="עיר" variant="outlined" />
    <TextField id="outlined-basic" label="רחוב" variant="outlined" />
    <TextField id="outlined-basic" label="בית" variant="outlined"  type="number" className='num'/>
    </div>
    
    {volunteer&&
    <div className='more-detailes'>
     <div className='div-title'>
       פרטי רכב:
     </div>
     <FormGroup row className='form-group'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אופנוע" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="רכב פרטי" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="אמבולנס" />
    </FormGroup>
    <FormGroup row className='form-group2'>
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="מעלון" />
      <FormControlLabel control={<Checkbox style={{color: '#ff9100'}}/>} label="כסא תינוק" />
    </FormGroup>
    <duv className='div-places'>
    <TextField id="outlined-basic" label="מספר מקומות " variant="outlined"  type="number"/>
    </duv>
    <div className='div-title'>
       התראות לדוא"ל:
     </div>
      <div className='div-places' style={{color: '#ff9100'}}>לסגור את עניין ההתראות!</div>


     </div>
    }
    </div>
    <div className='okWrap'>
                    <span></span>
                    <Button style={{backgroundColor: '#ff9100'}} className='ok' variant="contained" onClick={()=>{
                        alert('האם אתה בטוח?')} }>אישור</Button>
    </div>
    </div>
 )
}
export default SignUp