import React from "react";
import { useNavigate } from "react-router-dom";
import dashboardImage from "./images/Dashboard.png";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", textAlign: "center" }}>

      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Login
      </button>


      <img
  src={dashboardImage}
  alt="dashboard"
  style={{
    width: "100%",
    height: "100vh",
    objectFit: "contain"
  }}
/>

      <button
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>

    </div>
  );
}

export default Dashboard;