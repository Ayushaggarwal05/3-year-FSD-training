import React from "react";

function Card({ name, age, image }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "300px",
        background: "purple",
      }}>
      <h2 style={{ margin: "0 0 10px 0", color: "#fff" }}>Student Details</h2>

      <div style={{ fontSize: "16px" }}>
        <img
          src={image}
          alt={`${name}'s avatar`}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
        />

        <p style={{ margin: "8px 0" }}>
          <strong>Name:</strong> {name}
        </p>

        <p style={{ margin: "8px 0" }}>
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}

export default Card;
