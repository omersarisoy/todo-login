import React from "react";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { GlobalStyle } from "./assets/styled";
import LoginPage from "./components/LoginPage";
import ToDoPage from "./components/ToDoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  App: {},
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route path="/todo">
            <ToDoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
