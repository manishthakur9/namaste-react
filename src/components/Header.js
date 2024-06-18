import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Contact from "./Contact";


const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  useEffect(() =>{
    console.log("useEffet called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to= "/"> Home</Link>
          </li>
          <li>
            <Link to="about"> About Us</Link>
          </li>
          <li>
            <Link to= "contact"> Contact Us</Link>
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
