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
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>{`${flightData.id}-${flightData.flightNumber}-${flightData.status}`}</div>
  );
};

export default FlightDetails;
