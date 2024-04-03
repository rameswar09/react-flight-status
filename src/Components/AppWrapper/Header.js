import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../../css/header.css'

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(window.location.pathname==='/'){
        navigate("/flight-list");
    }
  });
  return <div className="header-wrapper"></div>;
};

export default Header;
