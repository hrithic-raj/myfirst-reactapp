import React, { useState } from 'react'
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Myform() {
    let value=null;
    let [val,setval]=useState(null)
    let [aroo,setaroo]=useState(null)
    const submit = (event)=>{
        setval(val=aroo)
        setaroo(aroo='')
        event.preventDefault();
    };
    
    const username=(event)=>{
        value=event.target.value
        setaroo(aroo=event.target.value)
        console.log(event.target.value);
    }
    
  return (
    <div>
        <form onSubmit={submit}>
            <input value={aroo} type="text" placeholder='Enter the username' onChange={username}/><br />
            <Button type="submit" className='hrjbtn'>Submit</Button><br />
            <br /><br />
            <h3>Username : {val}</h3>
        </form>
    </div>
  )
}

export default Myform