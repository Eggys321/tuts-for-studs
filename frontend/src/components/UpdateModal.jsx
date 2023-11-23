import React from "react";
import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// 
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UpdateModal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const { userId } = useParams();
  console.log(userId);

  const navigate = useNavigate()


  let getData = async () => {
    try {
      // setIsLoading(true);

      let dataGotten = await axios.get(
        `http://localhost:8080/api/user/${userId}`
      );
      console.log(dataGotten.data.user);
      // console.log(data);
      setEmail(dataGotten.data.user.email);
      setName(dataGotten.data.user.name);
      setProfession(dataGotten.data.user.profession);
      setGender(dataGotten.data.user.gender);
      
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  async function handleUpdate(userId){
    try {
      await axios.patch(`http://localhost:8080/api/user/${userId}`,{
        name,
        email,
        profession,
        gender
      })
      navigate('/AllUsers')


      
     
      
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg.message)
      
    }
  }

  
  useEffect (()=> {
    getData();
  }, [userId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main>
        <Button
          variant="primary"
          onClick={handleShow}
          className="btn btn-success btn-lg"
        >
          update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Name:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="type a name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setProfession(e.target.value)}
                />
              </Form.Group>
              {/* select n option */}

              <Form.Group className="mb-3 fw-bold">
                <Form.Label htmlFor="disabledSelect">Gender:</Form.Label>
                <Form.Select
                  id="disabledSelect"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>----</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleUpdate(userId);handleClose}}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default UpdateModal;
