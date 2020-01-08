import React, { useState } from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";
import Axios from "axios";

function NewRegistrationForm(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  const [location, setLocation] = useState("");

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
    Axios.post("https://bw-foodiefun.herokuapp.com/api/users/login", newObj)
      .then(res => {
        //console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
    //console.log("REG", userData);
    console.log(props);
    props.history.push("/dashboard");
  };
  //console.log("blah", userData);
  return (
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
  );
}

export default NewRegistrationForm;
