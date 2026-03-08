import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = async () => {

  if (!email || !username || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        username,
        password
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful ✅");
      navigate("/");   // 👈 Redirect to login page
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
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
        <h2>Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="text"
          placeholder="Username"
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          onClick={handleRegister}
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
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;