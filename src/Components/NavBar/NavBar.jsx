import React, { useEffect, useState } from "react";
import "./Styles.css";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useHistory } from "../HistoryContext";
import logo from "../../Assests/logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showHistory, setShowHistory] = useState(false);
  const { history, addToHistory } = useHistory();
  const [selectedHistory, setSelectedHistory] = useState(null);

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  const handleShowHistory = () => {
    setShowHistory(!showHistory);
  };

  const handlePreviewClick = (index) => {
    setSelectedHistory(index);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(232, 103, 184, 0.9)",
      }}
    >
      <div className="container">
        <Link to="/home" className="navbar-brand" title="Home">
          <div className="navbar-brand-wrapper">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "20px", marginLeft: "-70px" }}
            />
            <h1>Text Summariser</h1>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/textbox" className="nav-link" title="Summary">
                Summary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" title="About Us">
                About Us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {user && (
              <>
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <span>{user.name}</span>
              </>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger mx-2"
                title="Logout"
              >
                Logout
              </button>
            )}
            <button
              onClick={handleShowHistory}
              className="btn btn-outline-danger mx-2"
              title="Show History"
            >
              Show History
            </button>

            {showHistory && (
              <div className="history-sidebar">
                <div className="history-header">
                  <h2>History</h2>
                  <button onClick={() => setShowHistory(false)}>Close</button>
                </div>
                <div className="history-list">
                  {history.map((entry, index) => (
                    <div
                      key={index}
                      className={`history-item ${
                        index === selectedHistory ? "selected" : ""
                      }`}
                      onClick={() => handlePreviewClick(index)}
                    >
                      <p>{entry.data && entry.data.length > 0 ? entry.data[0] : "No data"}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
