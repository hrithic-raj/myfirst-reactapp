import React, { useState } from 'react'
import '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form,Button } from 'react-bootstrap'


function Todo(){
    const [todo,setTodo]=useState('');
    const [todos,setTodos]=useState([]);
        const addTodo=()=>{
            if(todo.trim()){
                setTodos([...todos,{text:todo,isChecked:false}]);
                setTodo('');
            }
        }
        const delTodo=(index)=>{
            const newTodo=todos.filter((item,i)=> i!==index)
            setTodos(newTodo);
        }
        const checkTodo=(index)=>{
            const newTodo=todos.map((item,i)=>(
                i===index?{...item,isChecked:!item.isChecked}:item
            ));
            setTodos(newTodo);
        }
    return (
            <>
                <br />
                <h1>ToDo List</h1>
                <div className='todo-top'>
                    <Form.Control type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                    <Button onClick={addTodo}>Add</Button>
                </div>
                <div className='todo-list'>
                    {todos.map((item,index)=>{
                        return <div key={index} className="todo-items" style={{backgroundColor: item.isChecked ?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 0.772)"}}>
                            <Form.Check checked={item.isChecked} onChange={()=>checkTodo(index)}/>
                            <span>{item.text}</span>
                            <Button variant='danger' onClick={()=>delTodo(index)}>Delete</Button>
                        </div>
                    })}
                    
              </div>
            </>
    )
}

export default Todo
