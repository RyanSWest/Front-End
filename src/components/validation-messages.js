export default {
  general: {
    missing: "Please provide the required field",
    invalid: "Provided value is invalid"
  },

  type: {
    email: {
      missing: "Please provide an e-mail",
      invalid: "The e-mail you provided is invalid"
    },
    password: {
      rule: {
        capitalLetter: "Please include at least one capital letter",
        oneNumber: "Please include at least one number",
        minLength: "Password must be at least 6 characters long"
      }
    }
  }
};
