import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import logo from "../img/blog.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>Food</h6>
          </Link>
        </div>
        <div className="links">
          {currentUser ? (
            <>
              <span className="currentUser">{currentUser?.username}</span>
              <Link to="/" className="logout" onClick={logout}>
                LogOut
              </Link>
              <span className="write">
                <Link className="link" to="/write">
                  Write
                </Link>
              </span>
            </>
          ) : (
            <>
              <Link className="link login" to="/login">
                Login
              </Link>
              <span className="write">
                <Link className="link" to="/login">
                  Write
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
