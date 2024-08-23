import React, { useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';

function Formval() {
    const initialValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState(initialValues);
    
    //onchange
    const handlechange=(event)=>{
        const {name,value}=event.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    }
    //onSubmit
    const handlesubmit=(event)=>{
        event.preventDefault();
        validate(formValues)
    }

    //validate
    const validate=(values)=>{

    }

  return (
    <>
        <div className='formdis'>
        <h1 >Form <br></br>Validation</h1>
        <pre>{JSON.stringify(formValues,undefined,10)}</pre>
        </div>
        <div className='formvalbox'>
            <form onSubmit={handlesubmit}>
                <Form.Group>
                    <label htmlFor="username">Username</label>
                    <Form.Control type='text' name='username' value={formValues.username} onChange={handlechange} placeholder='Enter your username'/>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="email">Email</label>
                    <Form.Control type='email' name='email' value={formValues.email} onChange={handlechange} placeholder='Enter your valid email'/>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="password">Password</label>
                    <Form.Control type='Password' name='password' value={formValues.password} onChange={handlechange} placeholder='Enter your password'/>
                </Form.Group>
                <br />
                <Button style={{width:"200px"}}>Submit</Button>
            </form>
        </div>
        
    </>
  )
}

export default Formval