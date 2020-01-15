import "./index.css";
import React from "react";
import { FormProvider } from "react-advanced-form";
import rules from "./components/validation-rules";
import messages from "./components/validation-messages";
import RegistrationForm from "./components/RegistrationForm";

function NewApp() {
  return (
    <div>
      <h1> Create a FoodieFun Account </h1>
      <p>* = required field</p>
      <FormProvider rules={rules} messages={messages}>
        <div className="flex">
          <RegistrationForm />
        </div>
      </FormProvider>

    </div>
  );
}

export default NewApp;
