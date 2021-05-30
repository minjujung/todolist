import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Youtube from "./service/youtube";
import AuthService from "./service/firebase_auth";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
