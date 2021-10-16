import React from "react";

import Input from "../../shared/components/UI/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/utils/validators";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title!"
      />
    </form>
  );
};

export default NewPlace;
