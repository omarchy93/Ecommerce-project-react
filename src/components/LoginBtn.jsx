import React from "react";
import { NavLink } from "react-router-dom";

const LoginBtn = () => {
  return (
    <div>
      <div className="login">
        <div className="navber">
          <NavLink to={"/login"} className="btn btn-success ">
            {" "}
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginBtn;
