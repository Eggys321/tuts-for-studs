import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbars from './layouts/Navbars';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import AllUsers from './pages/AllUsers';


function App() {
  // const [data,setData] = useState([]);
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [profession,setProfession] = useState('')
  // const [gender,setGender] = useState('')

  // getting all users
  // const getData = async()=>{
  //   try {
      
  //     const fetcher = await fetch('http://localhost:8080/api/user')
  //     const res = await fetcher.json();
  //     console.log(res.users);
  
  //     setData(res.users)
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  // // posting user
  // async function handleSubmit(e){
  //   e.preventDefault()
  //   try {
      
  //     await axios.post('http://localhost:8080/api/user',{
  //       name,
  //       email,
  //       profession,
  //       gender
  
  //     })
  //   } catch (error) {
  //     console.log(error);
      
  //   }


  // }


  
  // delete ftn
  // const deleteItem =async (userId)=>{
  //   try {
  //     await axios.delete(`http://localhost:8080/api/user/${userId}`)
      
  //   } catch (error) {
      
  //   }
    
    
  // }
  // useEffect(()=>{
  //   getData()
    
  // },[setData,setName])

  return (
    <>

    <BrowserRouter>
    <Navbars/>
    <Routes>

      <Route index element={<Home/>} />
      <Route path='/NewUser' element={<NewUser/>} />
      <Route path='/AllUsers' element={<AllUsers/>} />
    </Routes>
    
    </BrowserRouter>

      {/* <form action="" className='container py-5' onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
        <input type="text" placeholder='profession' value={profession} onChange={(e)=>setProfession(e.target.value)}/><br /><br />
        <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="choose">male / female</option>
          <option value="male">male </option>
          <option value="female">female</option>
        </select><br /><br />
        <button className="btn btn-success btn-lg">post</button>
      </form>
    <div className='container pt-5 d-flex justify-content-between align-items-center flex-wrap gap-4'>
     {data.map((datum)=>{
      const {_id,name,email,gender,profession} = datum
      return(
        <div key={_id} className='card'>
          <h2> {name} </h2>
          <h2> {email} </h2>
          <p> {gender} </p>
          <p> {profession} </p>
          <button className="btn btn-danger" onClick={()=>deleteItem(_id)}>delete</button>
        </div>
      )
     })}
    </div>
      */}
    </>
  )
}

export default App
