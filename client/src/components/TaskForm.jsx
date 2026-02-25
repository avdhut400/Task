// import { useState } from "react";
// import API from "../api/axios";

// const TaskForm = ({ fetchTasks }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     status: "pending"
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
//       await API.post("/tasks", formData);
//       setFormData({ title: "", description: "", status: "pending" });
//       fetchTasks();
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Task creation failed");
//     }
//   };

//   return (
//     <div>
//       <h3>Create Task</h3>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />

//         <br />
//         <br />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         <select name="status" value={formData.status} onChange={handleChange}>
//           <option value="pending">Pending</option>
//           <option value="in-progress">In Progress</option>
//           <option value="completed">Completed</option>
//         </select>

//         <br />
//         <br />

//         <button type="submit">Add Task</button>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;


import { useState } from "react";
import API from "../api/axios";
import { FaPlus, FaTimes, FaCheckCircle } from "react-icons/fa";

const TaskForm = ({ fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending"
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/tasks", formData);
      setFormData({ title: "", description: "", status: "pending" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      fetchTasks();
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Task creation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({ title: "", description: "", status: "pending" });
    setError("");
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      margin: '2rem auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'white',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <FaPlus style={{ fontSize: '1.2rem' }} />
          Create New Task
        </h3>
      </div>

      {error && (
        <div style={{
          backgroundColor: '#fee2e2',
          border: '1px solid #fecaca',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#dc2626'
        }}>
          <FaTimes style={{ fontSize: '1rem' }} />
          <span style={{ fontSize: '0.875rem' }}>{error}</span>
        </div>
      )}

      {success && (
        <div style={{
          backgroundColor: '#d1fae5',
          border: '1px solid #a7f3d0',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#059669'
        }}>
          <FaCheckCircle style={{ fontSize: '1rem' }} />
          <span style={{ fontSize: '0.875rem' }}>Task created successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            display: 'block',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '2px solid transparent',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = '#a78bfa';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'transparent';
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{
            display: 'block',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter task description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '2px solid transparent',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = '#a78bfa';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'transparent';
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '2px solid transparent',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.borderColor = '#a78bfa';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.borderColor = 'transparent';
            }}
          >
            <option value="pending" style={{color: '#1f2937'}}>⏳ Pending</option>
            <option value="in-progress" style={{color: '#1f2937'}}>⚡ In Progress</option>
            <option value="completed" style={{color: '#1f2937'}}>✅ Completed</option>
          </select>
        </div>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end'
        }}>
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: loading ? '#9ca3af' : 'white',
              color: loading ? '#4b5563' : '#667eea',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: loading ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading ? 'Creating...' : 'Add Task'}
            {!loading && <FaPlus style={{ fontSize: '0.875rem' }} />}
          </button>
        </div>
      </form>

      <style>
        {`
          input::placeholder, textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          select option {
            background-color: white;
          }
        `}
      </style>
    </div>
  );
};

export default TaskForm;