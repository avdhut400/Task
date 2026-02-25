import { useEffect, useState } from "react";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { FaSignOutAlt, FaSearch, FaTasks, FaFilter } from "react-icons/fa";

const Dashboard = () => {
  const { logout, user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const query = `?page=${page}&limit=6&search=${search}&status=${status}`;
      const { data } = await API.get(`/tasks${query}`);
      setTasks(data.tasks);
      setPages(data.pages);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [page, search, status]);

  const handleLogout = async () => {
    await logout();
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("");
    setPage(1);
  };

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        padding: "1.5rem",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <FaTasks style={{ color: "white", fontSize: "2rem" }} />
          <div>
            <h2 style={{
              margin: "0",
              color: "white",
              fontSize: "1.8rem",
              fontWeight: "600"
            }}>
              Welcome back, {user?.name}!
            </h2>
            <p style={{
              margin: "0.5rem 0 0",
              color: "rgba(255,255,255,0.8)",
              fontSize: "1rem"
            }}>
              Manage your tasks efficiently
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "0.75rem 1.5rem",
            background: "rgba(255,255,255,0.2)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "all 0.3s",
            backdropFilter: "blur(5px)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Task Form */}
      <div style={{
        background: "white",
        borderRadius: "15px",
        padding: "2rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        marginBottom: "2rem"
      }}>
        <h3 style={{
          margin: "0 0 1.5rem 0",
          color: "#333",
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span style={{
            background: "#667eea",
            color: "white",
            width: "30px",
            height: "30px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem"
          }}>+</span>
          Create New Task
        </h3>
        <TaskForm fetchTasks={fetchTasks} />
      </div>

      {/* Search and Filter Section */}
      <div style={{
        background: "white",
        borderRadius: "15px",
        padding: "1.5rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        marginBottom: "2rem"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem"
        }}>
          <h4 style={{
            margin: 0,
            color: "#555",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <FaFilter style={{ color: "#667eea" }} />
            Filter Tasks
          </h4>
          {(search || status) && (
            <button
              onClick={clearFilters}
              style={{
                padding: "0.4rem 1rem",
                background: "none",
                border: "1px solid #ddd",
                borderRadius: "20px",
                color: "#666",
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "none";
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          <div style={{
            flex: 2,
            position: "relative",
            minWidth: "250px"
          }}>
            <FaSearch style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#999"
            }} />
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.5rem",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "1rem",
                outline: "none",
                transition: "all 0.3s",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102,126,234,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <select
            value={status}
            onChange={(e) => {
              setPage(1);
              setStatus(e.target.value);
            }}
            style={{
              padding: "0.75rem 2rem 0.75rem 1rem",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              outline: "none",
              background: "white",
              minWidth: "180px",
              flex: 1
            }}
          >
            <option value="">All Status</option>
            <option value="pending">⏳ Pending</option>
            <option value="in-progress">⚡ In Progress</option>
            <option value="completed">✅ Completed</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div style={{
          textAlign: "center",
          padding: "3rem",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            margin: "0 auto 1rem",
            border: "3px solid #f3f3f3",
            borderTop: "3px solid #667eea",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <p style={{ color: "#666" }}>Loading tasks...</p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <>
          {/* Task List */}
          <TaskList 
            tasks={tasks} 
            fetchTasks={fetchTasks}
            page={page}
            setPage={setPage}
            pages={pages}
          />

          {/* Task Counter */}
          <div style={{
            marginTop: "1rem",
            textAlign: "center",
            color: "#666",
            fontSize: "0.95rem",
            background: "white",
            padding: "0.75rem",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
          }}>
            Showing <strong>{tasks.length}</strong> tasks • Page <strong>{page}</strong> of <strong>{pages}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;