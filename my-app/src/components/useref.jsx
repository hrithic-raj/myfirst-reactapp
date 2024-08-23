import React from 'react';
import { useRef } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Useref() {
    let inpref=useRef(null)
    let reffocus=()=>{
        inpref.current.focus();
    };
  return (
    <div>
        <input ref={inpref} type="text" placeholder='click to focus'/>
        <Button className='hrjbtn' onClick={reffocus}>Focus</Button>
    </div>
  )
}


export default Useref