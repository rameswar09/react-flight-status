import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(window.location.pathname==='/'){
        navigate("/flight-list");
    }
  });
  return <div>header da</div>;
};

export default Header;
