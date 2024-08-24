import React, { useEffect, useState } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';

function Formval() {
    const initialValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    
    //onchange
    const handlechange=(event)=>{
        const {name,value}=event.target;
        setFormValues({...formValues, [name]:value});
    }

    //onSubmit
    const handlesubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    //validate
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit===true){
            console.log(formValues);   
        }
    })

    const validate=(values)=>{
        let errors={};
        // const regex =/^[^\s@]+@[^\s@].[^\s@]{2,}$/i;
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!values.username){
            errors.username="Username required!";
        }
        if(!values.email){
            errors.email="Email required!";
        }
        else if(!regex.test(values.email)){
            errors.email="Enter a valid email";
        }
        if(!values.password){
            errors.password="Password required!";
        }else if(values.password.length < 4){
            errors.password="Password must be < 4 ";
        }else if(values.password.length > 10){
            errors.password="Password must be > 10 ";
        }
        return errors;
    }



  return (
    <>
        <div className='formdis'>
        <h1 >Form <br></br>Validation</h1>
        <br /><br />
        {(Object.keys(formErrors).length===0 && isSubmit===true)?(
                <div className='loginsucces'><h4>Login Successfully</h4></div>
            ):(
                <pre>{JSON.stringify(formValues,undefined,10)}</pre>
            )}
        </div>
        <div className='formvalbox'>
            <form onSubmit={handlesubmit}>
                <Form.Group>
                    <label htmlFor="username">Username</label>
                    <Form.Control type='text' name='username' value={formValues.username} onChange={handlechange} placeholder='Enter your username'/>
                    <span>{formErrors.username}</span>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="email">Email</label>
                    <Form.Control type='text' name='email' value={formValues.email} onChange={handlechange} placeholder='Enter your valid email'/>
                    <span>{formErrors.email}</span>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="password">Password</label>
                    <Form.Control type='Password' name='password' value={formValues.password} onChange={handlechange} placeholder='Enter your password'/>
                    <span>{formErrors.password}</span>
                </Form.Group>
                <Button type='submit' style={{width:"200px"}}>Submit</Button>
            </form>
        </div>
        
    </>
  )
}

export default Formval