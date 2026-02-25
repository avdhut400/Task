// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Login</h2>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <button type="submit">Login</button>
//       </form>

//       <p>
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#333",
        marginBottom: "25px",
        fontSize: "28px"
      }}>
        Login
      </h2>

      {error && (
        <div style={{
          backgroundColor: "#ffebee",
          color: "#c62828",
          padding: "10px",
          borderRadius: "4px",
          marginBottom: "20px",
          fontSize: "14px",
          textAlign: "center"
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            marginBottom: "5px",
            color: "#555",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#2196f3"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "5px",
            color: "#555",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              outline: "none"
            }}
            onFocus={(e) => e.target.style.borderColor = "#2196f3"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#ccc" : "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseEnter={(e) => {
            if (!loading) e.target.style.backgroundColor = "#1976d2";
          }}
          onMouseLeave={(e) => {
            if (!loading) e.target.style.backgroundColor = "#2196f3";
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#666",
        fontSize: "14px"
      }}>
        Don't have an account?{" "}
        <Link
          to="/register"
          style={{
            color: "#2196f3",
            textDecoration: "none",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
          onMouseLeave={(e) => e.target.style.textDecoration = "none"}
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;