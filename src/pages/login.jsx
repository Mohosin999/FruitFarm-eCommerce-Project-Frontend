import React from "react";
import LoginForm from "../components/login-register-form/Form";

const Login = () => {
  return (
    <div>
      <LoginForm
        title={"Login"}
        email={"Enter Your Email"}
        password={"Enter Your Password"}
        button={"Login"}
      />
    </div>
  );
};

export default Login;
