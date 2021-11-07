import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { GlobalStyle } from "./assets/styled";
import LoginPage from "./components/LoginPage";
import ToDoPage from "./components/ToDoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Routes from "./commons/routes";
import { HashRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  App: {},
}));

const App = () => {
  const classes = useStyles();

  const getItem = localStorage.getItem("token")
  return (
    <Router>
      <div className={classes.App}>
        <GlobalStyle />
        {
          getItem && getItem == "omer" ? <Redirect to="/todo" /> : <Redirect to="/" />
        }
        <Routes />
      </div>
    </Router>
      
  );
};

export default App;