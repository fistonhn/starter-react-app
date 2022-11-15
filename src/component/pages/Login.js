import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';


function Login() {
  return (
    <div>
        <img src={logo} style={{ padding: '1%'}} />
        <div style={{ color: 'white', margin: '5%', textAlign: 'center', padding: '10%' }}> 
            <h4 style = {{ color: 'black', marginLeft: '-130px' }}>Face Mapping Report</h4>
            <div style = {{display: 'block', width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
                <div style = {{display: 'flex', marginBottom:'-10px' }}>
                    <h6 style = {{ marginRight: '30px', marginTop: '13px', color: 'black', fontSize: '13px' }}>Email</h6>
                    <TextField
                        id="demo-helper-text-aligned"
                        label="Type"
                        size="small"
                    />
                </div>
                <div style = {{display: 'flex' }}>
                    <h6 style = {{ marginRight: '10px', marginTop: '13px', color: 'black', fontSize: '13px' }}>Password</h6>
                    <TextField
                        id="demo-helper-text-aligned"
                        label="Type"
                        size="small"
                    />
                </div>
            </div>
            <Button style={{ backgroundColor: 'black', marginTop: '-10px', width: '100px', fontSize: '13px', marginLeft: '-50px' }} size="small" variant="contained">Login</Button>
        </div>
    </div>
  );
}
export default Login;
