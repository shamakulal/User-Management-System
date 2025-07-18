
import React from "react";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #dadff3ff, #d3c1e5ff)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff",
        animation: "fadeIn 1.2s ease-in-out",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "40px 60px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1
          style={{ fontSize: "2.8rem", marginBottom: "20px", color: "black" }}
        >
          🚀 CRUD Operation
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.9, color: "black" }}>
          Build, Update, Delete, and Rule the Data World 😎
        </p>
      </div>
    </div>
  );
};

export default Home;
