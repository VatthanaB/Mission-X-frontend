import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Nunito, sans-serif",
        backgroundColor: "#42c0f6 ",
        color: "white",
      }}
    >
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>Please check the URL and try again, or go back to the</p>
      <Link
        style={{ color: "white", fontSize: "3rem", textDecoration: "none" }}
        to="/"
      >
        Home Page
      </Link>
    </div>
  );
}
