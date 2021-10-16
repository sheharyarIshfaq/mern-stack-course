import React, { useContext, useState } from "react";
import Button from "../../shared/components/UI/Button";
import Card from "../../shared/components/UI/Card";
import Input from "../../shared/components/UI/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./Auth.css";

const Auth = () => {
  const authCtx = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModehandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    authCtx.login();
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      {!isLoginMode && (
        <Input
          id="name"
          type="text"
          label="Your Name"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Enter your name"
          onInput={inputHandler}
        />
      )}
      <form onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please provide a valid email address!"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please provide a valid password! (Atleast 5 characters long"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Signup"}
        </Button>
      </form>
      <Button inverse onClick={switchModehandler}>
        Switch to {isLoginMode ? "Signup" : "Login"}
      </Button>
    </Card>
  );
};

export default Auth;