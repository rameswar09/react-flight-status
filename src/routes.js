import React from "react";

import { createBrowserRouter } from "react-router-dom";

import FlightList from "./Components/Flight/FlightList";
import FlightDetails from "./Components/Flight/FlightDetails";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",  
    element: <App />,
    children: [
      {
        path: "flight-list",
        element: <FlightList />,
      },
      {
        path: "flight-details/:id",
        element: <FlightDetails />,
      },
    ],
  },
]);
