import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CardShow = () => {
  const navigator = useNavigate();
  const logOut = () => {
    localStorage.clear("token");
    navigator(`/login`);
  };
  return (
    <div>
      <div className="flex ">
        <div className="btn btn-success mx-5">
          <NavLink to={"/card"}>card</NavLink>
        </div>
        <div className="btn btn-success">
          <a onClick={logOut}>Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default CardShow;
