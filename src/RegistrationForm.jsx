import React from "react";
import { Form, Field } from "react-advanced-form";
import { Input, Button } from "react-advanced-form-addons";

function NewRegistrationForm(props) {
  const registerUser = ({ serialized, fields, form }) => {
    return fetch("https://backend.dev", {
      body: JSON.stringify(serialized)
    });
  };

  return (
    <Form action={registerUser} onSubmitStart={props.onSubmitStart}>
      <Field.Group name="primaryInfo">
        <Input name="userEmail" type="email" label="E-mail" required />
        <Input name="username" type="username" label="Username" required />
        <Input name="userPassword" type="password" label="Password" required />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          required
          skip
        />
        <Input name="location" label="City Name" required />
      </Field.Group>

      <Button primary>Register</Button>
    </Form>
  );
}

export default NewRegistrationForm;
