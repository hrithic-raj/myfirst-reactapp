import React, { useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';

function Formval() {
    const initialvalue={username:'',email:'',password:''}
    const [formvalue,setformvalue]=useState(initialvalue);
    const handlechange=(event)=>{
        const {name,value}=event.target;
        setformvalue({...formvalue, [name]:value});
        console.log(formvalue);
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
    }

  return (
    <>
        <div className='formdis'>
        <h1 >Form <br></br>Validation</h1>
        <pre>{JSON.stringify(formvalue,undefined,10)}</pre>
        </div>
        <div className='formvalbox'>
            <form onSubmit={handlesubmit}>
                <Form.Group>
                    <label htmlFor="username">Username</label>
                    <Form.Control type='text' name='username' value={formvalue.username} onChange={handlechange} placeholder='Enter your username'/>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="email">Email</label>
                    <Form.Control type='email' name='email' value={formvalue.email} onChange={handlechange} placeholder='Enter your valid email'/>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="password">Password</label>
                    <Form.Control type='Password' name='password' value={formvalue.password} onChange={handlechange} placeholder='Enter your password'/>
                </Form.Group>
                <br />
                <Button style={{width:"200px"}}>Submit</Button>
            </form>
        </div>
        
    </>
  )
}

export default Formval