import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import HomeViewer from "../components/HomeLight";

/*
Student's Name: Samandar Obidov
Student ID: 301359339
Date: 01.28.2024
*/

const Routes = () => {
    return (
      <>
        <Router>
          <Switch>
          <Route exact path="/" element={<HomeViewer/>}/>
          </Switch>
        </Router>
      </>
    );
  };

  export default Routes;
