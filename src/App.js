import "./styles.css";
import {useState,useEffect} from 'react'
export default function App() {

  const[users,setUsers]=useState([])
const fetchData=async()=>{ 
  await fetch('https://dummyjson.com/users') 
  .then((res)=>res.json())
  .then((data)=>setUsers(data.users))
  .catch((err)=>console.log(err))
}
useEffect(()=>{
  fetchData()
},[])
console.log(users)



  return (
    <div className="App">
    { 
      Object.keys(users).map((item) => (
        <ul>
              <span>firstName:{ users[item].firstName }</span>
       
              <span>LastName::{ users[item].lastName }</span>
         </ul>
         

      ))
  }  
        </div>
  );
}
