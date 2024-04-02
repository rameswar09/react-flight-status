import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { axiosApiCall } from "../../Services/axiosCall";
const FlightList = () => {
  const [flightListData, setFlightListData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setInterval(async () => {
      try {
        let res = await axiosApiCall.get(
          "https://flight-status-mock.core.travelopia.cloud/flights"
        );
        setFlightListData(res.data);
      } catch (err) {
        console.log(err);
      }
    }, 3000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const handleClick = (id) => {
    navigate(`/flight-details/${id}`);
  };

  const all = flightListData.map((each) => {
    return (
      <p
        id={each.id}
        onClick={() => handleClick(each.id)}
      >{`${each.id}-${each.flightNumber}-${each.status}`}</p>
    );
  });

  return <div>{all}</div>;
};

export default FlightList;
