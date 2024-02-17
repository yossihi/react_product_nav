import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "./MyContext";

const Nav = () => {
  const { Username } = useContext(MyContext)

  const myGreeth = () => {
    return (Username !== "") ? `Welcome mr. ${Username}!`: "Please Log in" 
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "lightblue",
            padding: "8px",
          }}
        >
          <button
            className="navbar-brand"
            style={{ backgroundColor: "inherit", border: "none" }}
          >
            My Shope
          </button>
          
          <div>{myGreeth()}</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button className="nav-link active" aria-current="page">
                <Link
                  to={"./Login"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </button>
              <button className="nav-link">
                <Link
                  to={"./Register"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Link>
              </button>
              <button className="nav-link">
                <Link
                  to={"./Products"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Products
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
