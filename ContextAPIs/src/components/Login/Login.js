import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../Store/authContext";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }
  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "PASS_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === "PASS_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const authContext = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passIsValid } = passState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("timer");
      setFormIsValid(emailIsValid && passIsValid);
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({
      type: "EMAIL_INPUT",
      payload: event.target.value,
    });

    setFormIsValid(passState.isValid && event.target.value.includes("@"));
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPass({
      type: "PASS_INPUT",
      payload: event.target.value,
    });

    setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type: "EMAIL_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passState.isValid);
    dispatchPass({
      type: "PASS_BLUR",
    });
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailIsValid}
          label="E-Mail"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          isValid={passIsValid}
          label="Password"
          type="password"
          id="password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
