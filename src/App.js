import React from "react";
import { GlobalStyle } from "./assets/styled";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import Routes from "./commons/routes";

const App = () => {

  const getItem = localStorage.getItem("token")
  return (
    <Router>
      <div >
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