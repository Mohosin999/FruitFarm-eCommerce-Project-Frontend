import React from "react";
import RegisterForm from "../components/login-register-form/Form";

const Register = () => {
  return (
    <div>
      <RegisterForm
        title={"Register"}
        email={"Email"}
        password={"Password"}
        button={"Register"}
      />
    </div>
  );
};

export default Register;
