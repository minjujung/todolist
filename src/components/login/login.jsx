import React from "react";
import { useHistory } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToDashBoard = (data) => {
    history.push({
      pathname: "/dashboard",
      state: { userInfo: data },
    });
  };
  const onLogin = (e) => {
    authService
      .login(e.target.textContent)
      .then((result) => goToDashBoard(result.additionalUserInfo));
  };

  return (
    <>
      <h1>Login with...</h1>
      <button onClick={onLogin}>Google</button>
      <button onClick={onLogin}>Github</button>
      <button onClick={onLogin}>Twitter</button>
    </>
  );
};

export default Login;
