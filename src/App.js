import React, {Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/AppWrapper/Header";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};
export default App;
