import React, { useState ,useEffect} from 'react'

function Useeffect() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then(res=>res.json())
        .then(data=>setdata(data.quotes))
        .catch(err=>console.error("Error in fetching",err)
        )
    },[])
  return (
    <div>
        <h1>Fetching - useEffect()</h1>
        {data.map((data,index)=>{
            if(index<10){
                return <h6 key={data.id}>{data.quote}</h6>
            }
        })}
    </div>
  )
}

export default Useeffect