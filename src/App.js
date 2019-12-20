import "./index.css";
import React, { useState } from "react";
import Preview from "react-data-preview";
import { FormProvider } from "react-advanced-form";
import rules from "./validation-rules";
import messages from "./validation-messages";
import RegistrationForm from "./RegistrationForm";

function NewApp() {
  const [serialized, setSerialized] = useState(null);
  const handleSubmitStart = ({ serialized }) => {
    setSerialized({ serialized });
  };

  return (
    <FormProvider rules={rules} messages={messages}>
      <div className="flex">
        <RegistrationForm onSubmitStart={handleSubmitStart} />
        <Preview data={serialized} />
      </div>
    </FormProvider>
  );
}

export default NewApp;
