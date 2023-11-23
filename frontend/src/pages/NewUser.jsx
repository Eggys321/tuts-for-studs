import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import formImg from '../assets/goal-form-pic.png';
import '../styles/NewUser.css';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const NewUser = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [profession,setProfession] = useState('');
  const [gender,setGender] = useState('');
  const navigate = useNavigate()

 async function handleSubmit(e){
  e.preventDefault()
  // console.log('hello world');
  try {
    const data = await axios.post('http://localhost:8080/api/user',{
      name,
      email,
      profession,
      gender
    })
    if(data.status === 201){
      alert(data.data.msg)
      // toast(data.data.msg)

      navigate('/AllUsers')
      console.log(data);

    }
    
  } catch (error) {
    console.log(error);
    alert(error.response.data.msg.message)
    
  }

 }
 useEffect(()=>{
  document.title = 'New-use || Page'
 })

  return (
    <main className="container pt-4">

      <div className="row justify-content-evenly">
        <div className="col-sm-12 col-md-5 col-lg-">
          <Form className="p-3 shadow-lg">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Name:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type a name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Email:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type an email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Profession:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type a profession"
                  value={profession}
                  onChange={(e)=>setProfession(e.target.value)}
                />
              </Form.Group>
              {/* select n option */}

              <Form.Group className="mb-3 fw-bold">
                <Form.Label htmlFor="disabledSelect">
                  Gender:
                </Form.Label>
                <Form.Select id="disabledSelect" value={gender}
                 onChange={(e)=>setGender(e.target.value)}
                >
                  <option>----</option>
                  <option value='male'>male</option>
                  <option value='female'>female</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit" onClick={handleSubmit}>Submit</Button>
              <ToastContainer />

            </fieldset>
          </Form>
        </div>
        <div className="d-none d-lg-block col-md-5 col-lg-5">
          <img src={formImg} alt="formImage" className="img-flui p-2 shadow-sm" />
        </div>
      </div>
    </main>
  );
};

export default NewUser;
