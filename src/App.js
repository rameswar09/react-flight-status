import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/AppWrapper/Header";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Header />
        <Outlet />
      </ErrorBoundary>
    </Fragment>
  );
};
export default App;
