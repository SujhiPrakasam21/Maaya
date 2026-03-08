import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Register from "./Register";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user registered. Please register first.");
      return;
    }

    if (
      (username === storedUser.username || username === storedUser.email) &&
      password === storedUser.password
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "320px",
          textAlign: "center"
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        <p
          style={{ marginTop: "15px", cursor: "pointer", color: "blue" }}
          onClick={() => navigate("/register")}
        >
          New user? Register
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;