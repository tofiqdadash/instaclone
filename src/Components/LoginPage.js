import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/feed");
    }
  }, [navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    setError(" ");
    setSubmitting(true);
    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          localStorage.setItem("user", JSON.stringify(res));
          navigate("/feed");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit} className="loginpage--form-container">
        <img
          src="./assets/instagram-logo.png"
          alt="instagram logo"
          className="instagram-handwriting"
        />
        {error && <span className="error-message">{error}</span>}
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={submitting}>
          {submitting ? "Checking..." : "Log In"}
        </button>
      </form>
      <img
        src="./assets/device.png"
        alt="device img"
        className="device-image"
      />
    </div>
  );
}

export default LoginPage;
