import React, { useState } from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import Axios from "axios";
import LoginForm from "./LoginForm";

function NewRegistrationForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState({});

  const handleEmailChange = event => {
    let value = event.nextValue;
    setUserEmail(value);
  };
  const handleUsernameChange = event => {
    let value = event.nextValue;
    setUserName(value);
  };
  const handlePasswordChange = event => {
    let value = event.nextValue;
    setUserPassword(value);
  };
  const handleLocationChange = event => {
    let value = event.nextValue;
    setLocation(value);
  };
  const registerUserOnSubmit = e => {
    let newObj = {
      email: userEmail,
      username: userName,
      password: password,
      location: location
    };
    e.preventDefault();
    console.log(newObj);
    Axios.post("https://bw-foodiefun.herokuapp.com/api/users/register", newObj)
      .then(res => {
        console.log(res);
        //localStorage.setItem("token", res.data.token);
        setUser({ user_id: res.data.id, authorization: res.data.token });

      })
      .catch(err => console.log(err));
    //console.log(props);
  };

  return (
    <div>
      <Form>
        <Field.Group>
          <Input
            name="userEmail"
            type="email"
            label="E-mail"
            onChange={handleEmailChange}
            required
          />
          <Input
            name="username"
            type="username"
            label="Username"
            onChange={handleUsernameChange}
            required
          />
          <Input
            name="userPassword"
            type="password"
            label="Password"
            onChange={handlePasswordChange}
            required
          />
          <Input
            name="location"
            label="City Name"
            onChange={handleLocationChange}
            required
          />
        </Field.Group>

        <Button primary onClick={registerUserOnSubmit}>
          Register
      </Button>
      </Form>
      <div className="flex">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>

  );
}

export default NewRegistrationForm;
