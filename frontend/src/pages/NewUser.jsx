import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import formImg from "../assets/goal-form-pic.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:8080/api/user", {
        name,
        email,
        profession,
        gender,
      });
      console.log(data);
      if (data.status === 201) {
        navigate("/AllUsers");
        alert(data.data.msg)
      }
    } catch (error) {
      if (error) {
        alert(error.response.data.msg.message);
        return;
      }
      console.log(error);
    }
  }

  return (
    <main className="container pt-4">
      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-6 ">
          <Form className="">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Name:</Form.Label>
                <Form.Control
                  id="disabledTextInpu"
                  placeholder="Disabled input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Email:</Form.Label>
                <Form.Control
                  id="disabledTextInpu"
                  placeholder="Disabled input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Profession:</Form.Label>
                <Form.Control
                  id="disabledTextInpu"
                  placeholder="Disabled input"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Profession:</Form.Label>
                <Form.Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>----</option>
                  <option value="male">male </option>
                  <option value="female">female</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </fieldset>
          </Form>
        </div>
        <div className="d-none d-lg-block col-lg-5">
          <img src={formImg} alt="formImage" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default NewUser;
