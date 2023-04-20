import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import Styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  // const FormControl = styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     color: ${props => (props.isValid ? 'red' : 'black')};
  //     display: block;
  //     margin-bottom: 0.5rem;
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid ${props => (props.isValid ? 'red' : '#ccc')};
  //     background: ${props => (props.isValid ? '#ffd7d7' : 'white')};
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
  // `;

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setIsValid(true);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${Styles['form-control']} ${!isValid && Styles.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
