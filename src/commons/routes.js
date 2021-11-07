import React from "react";
import {Route, withRouter } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import ToDoPage from "../components/ToDoPage";


const Routes = () => (
    <div>
      <Route path="/" exact component={LoginPage} />
      <Route path="/todo" exact component={ToDoPage} />
    </div>
  );
  
  export default withRouter(Routes);
