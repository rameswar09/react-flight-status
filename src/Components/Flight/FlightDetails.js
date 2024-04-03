import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosApiCall } from "../../Services/axiosCall";

const FlightDetails = () => {
  const { id } = useParams();
  const [flightData, setFlightData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosApiCall.get(
          `https://flight-status-mock.core.travelopia.cloud/flights/${id}`
        );
        setFlightData(res.data);
      } catch (err) {
        setFlightData({})
        console.log(err);
      }
    })();
  }, [id]);
  return (
    <div className="flight-details-wrapper">
      {flightData.id?<div>
        <p>{` Id : ${flightData.id}`}</p>
        <p>{` Number : ${flightData.flightNumber}`}</p>
        <p>{` airline : ${flightData.airline}`}</p>
        <p>{` origin : ${flightData.origin}`}</p>
        <p>{` destination : ${flightData.destination}`}</p>
        <p>{` departureTime : ${new Date(
          flightData.departureTime
        ).toLocaleDateString()} ${new Date(
          flightData.departureTime
        ).toLocaleTimeString()}`}</p>
        <p>{` status : ${flightData.status}`}</p>
      </div>:<h1>Please wait!! we are fetching the flight details ...</h1>}
    </div>
  );
};
// {
//   "id": 1,
//   "flightNumber": "A1B44",
//   "airline": "Airline 1",
//   "origin": "Origin 1",
//   "destination": "Destination 1",
//   "departureTime": "2024-04-03T03:20:35.415Z",
//   "status": "Boarding"
// }
export default FlightDetails;
