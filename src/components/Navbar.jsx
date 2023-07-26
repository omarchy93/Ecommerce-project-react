import { NavLink } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import CardShow from "./CardShow";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">
            ECard.
          </NavLink>
        </div>
        {localStorage.getItem("token") === null ? <LoginBtn /> : <CardShow />}
      </div>
    </div>
  );
};

export default Navbar;
