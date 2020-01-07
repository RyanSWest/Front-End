import "./index.css";
import React from "react";
import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import RegistrationForm from "./RegistrationForm";

function NewApp() {
  return (
    <FormProvider rules={rules} messages={messages}>
      <div className="flex">
        <RegistrationForm />
      </div>
    </FormProvider>
  );
}

export default NewApp;
