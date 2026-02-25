// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Register = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
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
//       await register(formData);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Register failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//       <h2>Register</h2>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

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

//         <button type="submit">Register</button>
//       </form>

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Register = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
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
//       await register(formData);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Register failed");
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: "400px",
//       margin: "50px auto",
//       padding: "30px",
//       backgroundColor: "white",
//       borderRadius: "8px",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <h2 style={{
//         textAlign: "center",
//         color: "#333",
//         marginBottom: "25px",
//         fontSize: "28px"
//       }}>
//         Register
//       </h2>

//       {error && (
//         <div style={{
//           backgroundColor: "#ffebee",
//           color: "#c62828",
//           padding: "10px",
//           borderRadius: "4px",
//           marginBottom: "20px",
//           fontSize: "14px",
//           textAlign: "center"
//         }}>
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px",
//             fontSize: "14px",
//             boxSizing: "border-box",
//             marginBottom: "15px",
//             outline: "none"
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#4caf50"}
//           onBlur={(e) => e.target.style.borderColor = "#ddd"}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px",
//             fontSize: "14px",
//             boxSizing: "border-box",
//             marginBottom: "15px",
//             outline: "none"
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#4caf50"}
//           onBlur={(e) => e.target.style.borderColor = "#ddd"}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px",
//             fontSize: "14px",
//             boxSizing: "border-box",
//             marginBottom: "20px",
//             outline: "none"
//           }}
//           onFocus={(e) => e.target.style.borderColor = "#4caf50"}
//           onBlur={(e) => e.target.style.borderColor = "#ddd"}
//         />

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "12px",
//             backgroundColor: "#4caf50",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             fontSize: "16px",
//             fontWeight: "500",
//             cursor: "pointer",
//             transition: "background-color 0.3s"
//           }}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "#4caf50"}
//         >
//           Register
//         </button>
//       </form>

//       <p style={{
//         textAlign: "center",
//         marginTop: "20px",
//         color: "#666",
//         fontSize: "14px"
//       }}>
//         Already have an account?{" "}
//         <Link
//           to="/login"
//           style={{
//             color: "#4caf50",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//           onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
//           onMouseLeave={(e) => e.target.style.textDecoration = "none"}
//         >
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Register;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Register = () => {
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");
//   const [fieldErrors, setFieldErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     // Clear field-specific error when user starts typing
//     if (fieldErrors[e.target.name]) {
//       setFieldErrors({
//         ...fieldErrors,
//         [e.target.name]: ""
//       });
//     }
//     // Clear general error
//     if (error) setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(formData);
//       navigate("/");
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || "Registration failed";
      
//       // Check if it's a duplicate email error
//       if (errorMessage.includes("duplicate") || errorMessage.includes("email already exists")) {
//         setFieldErrors({
//           email: "This email is already registered. Please use a different email or login."
//         });
//       } else {
//         setError(errorMessage);
//       }
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: "400px",
//       margin: "50px auto",
//       padding: "30px",
//       backgroundColor: "white",
//       borderRadius: "8px",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       <h2 style={{
//         textAlign: "center",
//         color: "#333",
//         marginBottom: "25px",
//         fontSize: "28px"
//       }}>
//         Register
//       </h2>

//       {error && (
//         <div style={{
//           backgroundColor: "#ffebee",
//           color: "#c62828",
//           padding: "10px",
//           borderRadius: "4px",
//           marginBottom: "20px",
//           fontSize: "14px",
//           textAlign: "center"
//         }}>
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "15px" }}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "4px",
//               fontSize: "14px",
//               boxSizing: "border-box",
//               outline: "none"
//             }}
//             onFocus={(e) => e.target.style.borderColor = "#4caf50"}
//             onBlur={(e) => e.target.style.borderColor = "#ddd"}
//           />
//         </div>

//         <div style={{ marginBottom: "15px" }}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: fieldErrors.email ? "1px solid #f44336" : "1px solid #ddd",
//               borderRadius: "4px",
//               fontSize: "14px",
//               boxSizing: "border-box",
//               outline: "none"
//             }}
//             onFocus={(e) => e.target.style.borderColor = fieldErrors.email ? "#f44336" : "#4caf50"}
//             onBlur={(e) => e.target.style.borderColor = fieldErrors.email ? "#f44336" : "#ddd"}
//           />
//           {fieldErrors.email && (
//             <p style={{
//               color: "#f44336",
//               fontSize: "12px",
//               margin: "5px 0 0",
//               display: "flex",
//               alignItems: "center",
//               gap: "4px"
//             }}>
//               <span>⚠️</span> {fieldErrors.email}
//             </p>
//           )}
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={{
//               width: "100%",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "4px",
//               fontSize: "14px",
//               boxSizing: "border-box",
//               outline: "none"
//             }}
//             onFocus={(e) => e.target.style.borderColor = "#4caf50"}
//             onBlur={(e) => e.target.style.borderColor = "#ddd"}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "12px",
//             backgroundColor: "#4caf50",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             fontSize: "16px",
//             fontWeight: "500",
//             cursor: "pointer",
//             transition: "background-color 0.3s"
//           }}
//           onMouseEnter={(e) => e.target.style.backgroundColor = "#45a049"}
//           onMouseLeave={(e) => e.target.style.backgroundColor = "#4caf50"}
//         >
//           Register
//         </button>
//       </form>

//       <p style={{
//         textAlign: "center",
//         marginTop: "20px",
//         color: "#666",
//         fontSize: "14px"
//       }}>
//         Already have an account?{" "}
//         <Link
//           to="/login"
//           style={{
//             color: "#4caf50",
//             textDecoration: "none",
//             fontWeight: "500"
//           }}
//           onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
//           onMouseLeave={(e) => e.target.style.textDecoration = "none"}
//         >
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    console.log(`Field changed: ${e.target.name} = ${e.target.value}`);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("=".repeat(50));
    console.log("REGISTER FORM SUBMITTED");
    console.log("Form Data:", formData);
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password length:", formData.password.length);
    
    // Basic validation
    if (formData.password.length < 6) {
      console.log("Validation failed: Password too short");
      setError("Password must be at least 6 characters");
      return;
    }
    
    if (!formData.email.includes("@")) {
      console.log("Validation failed: Invalid email");
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    console.log("Setting loading state: true");
    
    try {
      console.log("Calling register API with data:", formData);
      const response = await register(formData);
      console.log("Register API response:", response);
      console.log("Register successful! Navigating to dashboard...");
      navigate("/");
    } catch (err) {
      console.log("=".repeat(50));
      console.log("REGISTER ERROR CAUGHT");
      console.log("Error object:", err);
      console.log("Error response:", err.response);
      console.log("Error status:", err.response?.status);
      console.log("Error data:", err.response?.data);
      console.log("Error message:", err.response?.data?.message);
      console.log("Error stack:", err.stack);
      
      const errorMessage = err.response?.data?.message || "Registration failed";
      console.log("Setting error message:", errorMessage);
      setError(errorMessage);
    } finally {
      console.log("Setting loading state: false");
      setLoading(false);
    }
    console.log("=".repeat(50));
  };

  console.log("Rendering Register component, loading:", loading);

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
        Register
      </h2>

      {error && (
        <div style={{
          backgroundColor: "#ffebee",
          color: "#c62828",
          padding: "12px",
          borderRadius: "4px",
          marginBottom: "20px",
          fontSize: "14px",
          textAlign: "center",
          border: "1px solid #ef9a9a"
        }}>
          <strong>Error:</strong> {error}
          {error.includes("already registered") && (
            <div style={{ marginTop: "10px" }}>
              <Link 
                to="/login" 
                style={{ 
                  color: "#c62828", 
                  fontWeight: "bold",
                  textDecoration: "underline" 
                }}
              >
                Click here to login
              </Link>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{
            display: "block",
            marginBottom: "5px",
            color: "#555",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              outline: "none"
            }}
            onFocus={(e) => {
              console.log("Name field focused");
              e.target.style.borderColor = "#4caf50";
            }}
            onBlur={(e) => {
              console.log("Name field blurred, value:", e.target.value);
              e.target.style.borderColor = "#ddd";
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{
            display: "block",
            marginBottom: "5px",
            color: "#555",
            fontSize: "14px",
            fontWeight: "500"
          }}>
            Email Address
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
              padding: "12px",
              border: error && error.includes("email") ? "1px solid #f44336" : "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              outline: "none"
            }}
            onFocus={(e) => {
              console.log("Email field focused");
              e.target.style.borderColor = "#4caf50";
            }}
            onBlur={(e) => {
              console.log("Email field blurred, value:", e.target.value);
              e.target.style.borderColor = error && error.includes("email") ? "#f44336" : "#ddd";
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
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
            placeholder="Enter password (min. 6 characters)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              outline: "none"
            }}
            onFocus={(e) => {
              console.log("Password field focused");
              e.target.style.borderColor = "#4caf50";
            }}
            onBlur={(e) => {
              console.log(`Password field blurred, length: ${e.target.value.length}`);
              e.target.style.borderColor = "#ddd";
            }}
          />
          {formData.password.length > 0 && formData.password.length < 6 && (
            <p style={{
              color: "#f44336",
              fontSize: "12px",
              margin: "5px 0 0"
            }}>
              Password must be at least 6 characters
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#ccc" : "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s, transform 0.2s",
            opacity: loading ? 0.7 : 1
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = "#45a049";
              e.target.style.transform = "translateY(-2px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.target.style.backgroundColor = "#4caf50";
              e.target.style.transform = "translateY(0)";
            }
          }}
          onClick={() => console.log("Register button clicked")}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#666",
        fontSize: "14px"
      }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#4caf50",
            textDecoration: "none",
            fontWeight: "500"
          }}
          onMouseEnter={(e) => {
            console.log("Login link hover");
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => console.log("Login link clicked")}
        >
          Login
        </Link>
      </p>

      {/* Hidden pre-formatted log section */}
      <div style={{ display: 'none' }}>
        {console.log("Current form state:", formData)}
        {console.log("Current error state:", error)}
        {console.log("Current loading state:", loading)}
      </div>
    </div>
  );
};

export default Register;