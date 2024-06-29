import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffet called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="about"> About Us</Link>
          </li>
          <li>
            <Link to="contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
