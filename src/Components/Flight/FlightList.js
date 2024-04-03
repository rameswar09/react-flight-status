import React, { useEffect, useState } from "react";
import { axiosApiCall } from "../../Services/axiosCall";

import "../../css/flight.css";

const FlightList = () => {
  const [flightListData, setFlightListData] = useState([]);
  useEffect(() => {
    let timer = setInterval(async () => {
      try {
        let res = await axiosApiCall.get(
          "https://flight-status-mock.core.travelopia.cloud/flights"
        );
        setFlightListData(res.data);
      } catch (err) {
        setFlightListData([]);
        console.log(err);
      }
    }, 3000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const allFlights = flightListData.map((each) => {
    return (
      <tr>
        <td>{each.id}</td>
        <td>{each.flightNumber}</td>
        <td>{each.airline}</td>
        <td>{each.origin}</td>
        <td>{each.destination}</td>
        <td>{`${new Date(each.departureTime).toLocaleDateString()} ${new Date(
          each.departureTime
        ).toLocaleTimeString()}`}</td>
        <td
          style={{
            color:
              each.status === "Delayed"
                ? "#ff6666"
                : each.status === "On Time"
                ? "#00b33c"
                : null,
          }}
        >
          {each.status}
        </td>
        <td>
          <a
            href={`${window.location.origin}/flight-details/${each.id}`}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
        </td>
      </tr>
      // <p
      //   id={each.id}
      //   onClick={() => handleClick(each.id)}
      // >{`${each.id}-${each.flightNumber}-${each.status}`}</p>
    );
  });

  return (
    <div className="flight-list-wrapper">
      {/* <div class="table-container"> */}
      {flightListData.length !== 0 ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Flight Number</th>
              <th>Airline</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Status</th>
              <th>View details</th>
            </tr>
          </thead>
          <tbody>{allFlights}</tbody>
        </table>
      ) : (
        <h1>Please wait!! we are fetching the flight details ...</h1>
      )}
      {/* </div> */}
    </div>
  );
};

export default FlightList;
