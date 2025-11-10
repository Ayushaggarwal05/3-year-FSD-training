import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // For now just log — in a real app you'd call your auth API
    console.log("Login", { email, password });
    alert(`Logging in as ${email}`);
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "0.5rem", maxWidth: 360 }}>
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
