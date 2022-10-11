import React from "react";
import Modal from "../UI/Modal";
import { useInput } from "../../hooks/useInput";
import ClearIcon from "@mui/icons-material/Clear";
import { formToggleSliceActions } from "../../store/FormToggleSlice";
import Loader from "../UI/Loader";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../../hooks/useFetch";
import { Alert } from "@mui/material";
import { Button } from "@mui/material";
import "./Login.css";
import LoginSuccess from "./LoginSuccess";

const Auth = ({ isLogin, url, successMsg }) => {

  const dispatch = useDispatch()

  const {loading, response, error, fetchRequest} = useHttp()
  const status = useSelector((state) => state.auth)
  const {
    input: enteredEmail,
    inputHandler: emailHandler,
    blurHandler: emailBlurHandler,
    inputHasError: emailHasError,
  } = useInput(
    (input) => input.trim().includes("@") && input.trim().length > 6
  );
  const {
    input: enteredPassword,
    inputHandler: passwordHandler,
    blurHandler: passwrodBlurHandler,
    inputHasError: passwordHasError,
  } = useInput((input) => input.trim().length > 6);

 
  const toggleModal = () => {
    dispatch(formToggleSliceActions.toggleLoginForm());
  };

  const toggleForm = () => {
    dispatch(formToggleSliceActions.toggleModal());
  };


  const statusError = "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (!emailHasError && !passwordHasError) {

        fetchRequest(url, {email: enteredEmail, password: enteredPassword})
    }
  };


 

  return (
    <Modal>
      <div className="login-form">
        <ClearIcon onClick={toggleModal} />
        {status.isLogged ? <>    <LoginSuccess msg={successMsg} /></> : <> 
        <form onSubmit={submitHandler}>
          <h4>
            {isLogin ? "Please login to your account" : "Create new account"}
          </h4>
          <label>Have an email ?</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`${emailHasError ? "error" : ""}`}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <div className="error-div">
              <span>please enter a valid email address</span>
            </div>
          )}
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={`${passwordHasError ? "error" : ""}`}
            onChange={passwordHandler}
            onBlur={passwrodBlurHandler}
          />
          {passwordHasError && (
            <div className="error-div">
              <span>please enter a valid password</span>{" "}
            </div>
          )}
          {statusError && <Alert severity="error">''</Alert>}
          <Button variant="contained" type="submit">
            Continue
          </Button>
        </form>
        <Button variant="outlined" className="signup-btn" onClick={toggleForm}>
          {isLogin ? "Created new Account" : "Already have an account"}
        </Button>
        {loading && <div className="loading"><Loader  /></div>}

          {error!=='' && <div className="error-div"><span className="error">{error}</span></div>}
        </>}
      </div>
    </Modal>
  );
};

export default Auth;
