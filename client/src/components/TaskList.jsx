// // import API from "../api/axios";

// // const TaskList = ({ tasks, fetchTasks }) => {
// //   const updateStatus = async (id, status) => {
// //     await API.put(`/tasks/${id}`, { status });
// //     fetchTasks();
// //   };

// //   const deleteTask = async (id) => {
// //     await API.delete(`/tasks/${id}`);
// //     fetchTasks();
// //   };

// //   return (
// //     <div>
// //       <h3>Your Tasks</h3>

// //       {tasks.length === 0 && <p>No tasks found</p>}

// //       {tasks.map((task) => (
// //         <div
// //           key={task._id}
// //           style={{
// //             border: "1px solid #ccc",
// //             padding: "10px",
// //             marginBottom: "10px"
// //           }}
// //         >
// //           <h4>{task.title}</h4>
// //           <p>{task.description}</p>
// //           <p>Status: {task.status}</p>

// //           <select
// //             value={task.status}
// //             onChange={(e) => updateStatus(task._id, e.target.value)}
// //           >
// //             <option value="pending">Pending</option>
// //             <option value="in-progress">In Progress</option>
// //             <option value="completed">Completed</option>
// //           </select>

// //           <button onClick={() => deleteTask(task._id)}>Delete</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default TaskList;



// import API from "../api/axios";
// import { 
//   FaCheckCircle, 
//   FaClock, 
//   FaSpinner, 
//   FaTrash, 
//   FaEdit,
//   FaExclamationCircle 
// } from "react-icons/fa";

// const TaskList = ({ tasks, fetchTasks }) => {
//   const updateStatus = async (id, status) => {
//     await API.put(`/tasks/${id}`, { status });
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       await API.delete(`/tasks/${id}`);
//       fetchTasks();
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'completed':
//         return <FaCheckCircle style={{ color: '#10b981', fontSize: '1.2rem' }} />;
//       case 'in-progress':
//         return <FaSpinner style={{ color: '#f59e0b', fontSize: '1.2rem' }} />;
//       default:
//         return <FaClock style={{ color: '#6b7280', fontSize: '1.2rem' }} />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'completed':
//         return '#10b981';
//       case 'in-progress':
//         return '#f59e0b';
//       default:
//         return '#6b7280';
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '2rem',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '2rem'
//       }}>
//         <h2 style={{
//           fontSize: '2rem',
//           fontWeight: '600',
//           color: '#1f2937',
//           margin: 0
//         }}>
//           ✨ Your Tasks
//         </h2>
//         <span style={{
//           background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//           color: 'white',
//           padding: '0.5rem 1rem',
//           borderRadius: '9999px',
//           fontSize: '0.875rem',
//           fontWeight: '500'
//         }}>
//           {tasks.length} total
//         </span>
//       </div>

//       {tasks.length === 0 ? (
//         <div style={{
//           textAlign: 'center',
//           padding: '4rem 2rem',
//           background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
//           borderRadius: '1rem',
//           border: '2px dashed #e5e7eb'
//         }}>
//           <FaExclamationCircle style={{
//             fontSize: '3rem',
//             color: '#9ca3af',
//             marginBottom: '1rem'
//           }} />
//           <p style={{
//             fontSize: '1.25rem',
//             fontWeight: '600',
//             color: '#4b5563',
//             margin: '0.5rem 0'
//           }}>
//             No tasks found
//           </p>
//           <p style={{
//             color: '#6b7280',
//             margin: 0
//           }}>
//             Create a new task to get started!
//           </p>
//         </div>
//       ) : (
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//           gap: '1.5rem'
//         }}>
//           {tasks.map((task) => (
//             <div
//               key={task._id}
//               style={{
//                 background: 'white',
//                 borderRadius: '1rem',
//                 padding: '1.5rem',
//                 boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//                 border: '1px solid #f3f4f6',
//                 cursor: 'pointer'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
//               }}
//             >
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 marginBottom: '1rem'
//               }}>
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.75rem',
//                   flex: 1
//                 }}>
//                   {getStatusIcon(task.status)}
//                   <h3 style={{
//                     fontSize: '1.125rem',
//                     fontWeight: '600',
//                     color: '#1f2937',
//                     margin: 0,
//                     wordBreak: 'break-word'
//                   }}>
//                     {task.title}
//                   </h3>
//                 </div>
//                 <div style={{
//                   display: 'flex',
//                   gap: '0.5rem'
//                 }}>
//                   <button style={{
//                     background: 'none',
//                     border: 'none',
//                     padding: '0.5rem',
//                     cursor: 'pointer',
//                     borderRadius: '0.5rem',
//                     color: '#6b7280',
//                     transition: 'all 0.2s',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = '#f3f4f6';
//                     e.currentTarget.style.color = '#3b82f6';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'none';
//                     e.currentTarget.style.color = '#6b7280';
//                   }}>
//                     <FaEdit />
//                   </button>
//                   <button 
//                     style={{
//                       background: 'none',
//                       border: 'none',
//                       padding: '0.5rem',
//                       cursor: 'pointer',
//                       borderRadius: '0.5rem',
//                       color: '#6b7280',
//                       transition: 'all 0.2s',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.background = '#fee2e2';
//                       e.currentTarget.style.color = '#ef4444';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.background = 'none';
//                       e.currentTarget.style.color = '#6b7280';
//                     }}
//                     onClick={() => deleteTask(task._id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
              
//               <p style={{
//                 color: '#4b5563',
//                 margin: '0 0 1.5rem 0',
//                 lineHeight: '1.5',
//                 fontSize: '0.95rem'
//               }}>
//                 {task.description}
//               </p>
              
//               <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginTop: 'auto'
//               }}>
//                 <select
//                   value={task.status}
//                   onChange={(e) => updateStatus(task._id, e.target.value)}
//                   style={{
//                     padding: '0.5rem 1rem',
//                     borderRadius: '0.5rem',
//                     border: 'none',
//                     color: 'white',
//                     fontSize: '0.875rem',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     outline: 'none',
//                     backgroundColor: getStatusColor(task.status),
//                     width: '140px'
//                   }}
//                 >
//                   <option value="pending" style={{color: 'black'}}>⏳ Pending</option>
//                   <option value="in-progress" style={{color: 'black'}}>⚡ In Progress</option>
//                   <option value="completed" style={{color: 'black'}}>✅ Completed</option>
//                 </select>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskList;

// import API from "../api/axios";
// import { useState } from "react";
// import { 
//   FaCheckCircle, 
//   FaClock, 
//   FaSpinner, 
//   FaTrash, 
//   FaEdit,
//   FaSave,
//   FaTimes,
//   FaExclamationCircle 
// } from "react-icons/fa";

// const TaskList = ({ tasks, fetchTasks }) => {
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [editData, setEditData] = useState({
//     title: "",
//     description: "",
//     status: "pending"
//   });

//   const updateStatus = async (id, status) => {
//     await API.put(`/tasks/${id}`, { status });
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     if (window.confirm("Are you sure you want to delete this task?")) {
//       await API.delete(`/tasks/${id}`);
//       fetchTasks();
//     }
//   };

//   const startEdit = (task) => {
//     setEditingTaskId(task._id);
//     setEditData({
//       title: task.title,
//       description: task.description,
//       status: task.status
//     });
//   };

//   const cancelEdit = () => {
//     setEditingTaskId(null);
//   };

//   const saveEdit = async (id) => {
//     await API.put(`/tasks/${id}`, editData);
//     setEditingTaskId(null);
//     fetchTasks();
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'completed':
//         return <FaCheckCircle style={{ color: '#10b981', fontSize: '1.2rem' }} />;
//       case 'in-progress':
//         return <FaSpinner style={{ color: '#f59e0b', fontSize: '1.2rem' }} />;
//       default:
//         return <FaClock style={{ color: '#6b7280', fontSize: '1.2rem' }} />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'completed':
//         return '#10b981';
//       case 'in-progress':
//         return '#f59e0b';
//       default:
//         return '#6b7280';
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '2rem',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '2rem'
//       }}>
//         <h2 style={{
//           fontSize: '2rem',
//           fontWeight: '600',
//           color: '#1f2937',
//           margin: 0
//         }}>
//           ✨ Your Tasks
//         </h2>
//         <span style={{
//           background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//           color: 'white',
//           padding: '0.5rem 1rem',
//           borderRadius: '9999px',
//           fontSize: '0.875rem',
//           fontWeight: '500'
//         }}>
//           {tasks.length} total
//         </span>
//       </div>

//       {tasks.length === 0 ? (
//         <div style={{
//           textAlign: 'center',
//           padding: '4rem 2rem',
//           background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
//           borderRadius: '1rem',
//           border: '2px dashed #e5e7eb'
//         }}>
//           <FaExclamationCircle style={{
//             fontSize: '3rem',
//             color: '#9ca3af',
//             marginBottom: '1rem'
//           }} />
//           <p style={{
//             fontSize: '1.25rem',
//             fontWeight: '600',
//             color: '#4b5563',
//             margin: '0.5rem 0'
//           }}>
//             No tasks found
//           </p>
//           <p style={{
//             color: '#6b7280',
//             margin: 0
//           }}>
//             Create a new task to get started!
//           </p>
//         </div>
//       ) : (
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
//           gap: '1.5rem'
//         }}>
//           {tasks.map((task) => (
//             <div
//               key={task._id}
//               style={{
//                 background: 'white',
//                 borderRadius: '1rem',
//                 padding: '1.5rem',
//                 boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//                 border: '1px solid #f3f4f6'
//               }}
//               onMouseEnter={(e) => {
//                 if (!editingTaskId) {
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                   e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
//               }}
//             >
//               {editingTaskId === task._id ? (
//                 // Edit Mode
//                 <div>
//                   <div style={{ marginBottom: '1rem' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '0.875rem',
//                       fontWeight: '500',
//                       color: '#4b5563',
//                       marginBottom: '0.25rem'
//                     }}>
//                       Title
//                     </label>
//                     <input
//                       type="text"
//                       value={editData.title}
//                       onChange={(e) =>
//                         setEditData({ ...editData, title: e.target.value })
//                       }
//                       style={{
//                         width: '100%',
//                         padding: '0.5rem',
//                         border: '1px solid #d1d5db',
//                         borderRadius: '0.375rem',
//                         fontSize: '1rem',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>

//                   <div style={{ marginBottom: '1rem' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '0.875rem',
//                       fontWeight: '500',
//                       color: '#4b5563',
//                       marginBottom: '0.25rem'
//                     }}>
//                       Description
//                     </label>
//                     <textarea
//                       value={editData.description}
//                       onChange={(e) =>
//                         setEditData({ ...editData, description: e.target.value })
//                       }
//                       rows="3"
//                       style={{
//                         width: '100%',
//                         padding: '0.5rem',
//                         border: '1px solid #d1d5db',
//                         borderRadius: '0.375rem',
//                         fontSize: '1rem',
//                         boxSizing: 'border-box',
//                         fontFamily: 'inherit'
//                       }}
//                     />
//                   </div>

//                   <div style={{ marginBottom: '1.5rem' }}>
//                     <label style={{
//                       display: 'block',
//                       fontSize: '0.875rem',
//                       fontWeight: '500',
//                       color: '#4b5563',
//                       marginBottom: '0.25rem'
//                     }}>
//                       Status
//                     </label>
//                     <select
//                       value={editData.status}
//                       onChange={(e) =>
//                         setEditData({ ...editData, status: e.target.value })
//                       }
//                       style={{
//                         width: '100%',
//                         padding: '0.5rem',
//                         border: '1px solid #d1d5db',
//                         borderRadius: '0.375rem',
//                         fontSize: '1rem',
//                         backgroundColor: 'white'
//                       }}
//                     >
//                       <option value="pending">⏳ Pending</option>
//                       <option value="in-progress">⚡ In Progress</option>
//                       <option value="completed">✅ Completed</option>
//                     </select>
//                   </div>

//                   <div style={{
//                     display: 'flex',
//                     gap: '0.5rem',
//                     justifyContent: 'flex-end'
//                   }}>
//                     <button
//                       onClick={() => saveEdit(task._id)}
//                       style={{
//                         padding: '0.5rem 1rem',
//                         background: '#10b981',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '0.375rem',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.25rem',
//                         fontSize: '0.875rem'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.background = '#059669';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.background = '#10b981';
//                       }}
//                     >
//                       <FaSave /> Save
//                     </button>
//                     <button
//                       onClick={cancelEdit}
//                       style={{
//                         padding: '0.5rem 1rem',
//                         background: '#6b7280',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '0.375rem',
//                         cursor: 'pointer',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.25rem',
//                         fontSize: '0.875rem'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.background = '#4b5563';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.background = '#6b7280';
//                       }}
//                     >
//                       <FaTimes /> Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 // View Mode
//                 <>
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'flex-start',
//                     marginBottom: '1rem'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '0.75rem',
//                       flex: 1
//                     }}>
//                       {getStatusIcon(task.status)}
//                       <h3 style={{
//                         fontSize: '1.125rem',
//                         fontWeight: '600',
//                         color: '#1f2937',
//                         margin: 0,
//                         wordBreak: 'break-word'
//                       }}>
//                         {task.title}
//                       </h3>
//                     </div>
//                     <div style={{
//                       display: 'flex',
//                       gap: '0.5rem'
//                     }}>
//                       <button
//                         onClick={() => startEdit(task)}
//                         style={{
//                           background: 'none',
//                           border: 'none',
//                           padding: '0.5rem',
//                           cursor: 'pointer',
//                           borderRadius: '0.5rem',
//                           color: '#6b7280',
//                           transition: 'all 0.2s',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.background = '#f3f4f6';
//                           e.currentTarget.style.color = '#3b82f6';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.background = 'none';
//                           e.currentTarget.style.color = '#6b7280';
//                         }}
//                       >
//                         <FaEdit />
//                       </button>
//                       <button
//                         onClick={() => deleteTask(task._id)}
//                         style={{
//                           background: 'none',
//                           border: 'none',
//                           padding: '0.5rem',
//                           cursor: 'pointer',
//                           borderRadius: '0.5rem',
//                           color: '#6b7280',
//                           transition: 'all 0.2s',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center'
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.background = '#fee2e2';
//                           e.currentTarget.style.color = '#ef4444';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.background = 'none';
//                           e.currentTarget.style.color = '#6b7280';
//                         }}
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <p style={{
//                     color: '#4b5563',
//                     margin: '0 0 1.5rem 0',
//                     lineHeight: '1.5',
//                     fontSize: '0.95rem'
//                   }}>
//                     {task.description}
//                   </p>
                  
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginTop: 'auto'
//                   }}>
//                     <select
//                       value={task.status}
//                       onChange={(e) => updateStatus(task._id, e.target.value)}
//                       style={{
//                         padding: '0.5rem 1rem',
//                         borderRadius: '0.5rem',
//                         border: 'none',
//                         color: 'white',
//                         fontSize: '0.875rem',
//                         fontWeight: '500',
//                         cursor: 'pointer',
//                         outline: 'none',
//                         backgroundColor: getStatusColor(task.status),
//                         width: '140px'
//                       }}
//                     >
//                       <option value="pending" style={{color: 'black'}}>⏳ Pending</option>
//                       <option value="in-progress" style={{color: 'black'}}>⚡ In Progress</option>
//                       <option value="completed" style={{color: 'black'}}>✅ Completed</option>
//                     </select>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskList;


import API from "../api/axios";
import { useState } from "react";
import { 
  FaCheckCircle, 
  FaClock, 
  FaSpinner, 
  FaTrash, 
  FaEdit,
  FaSave,
  FaTimes,
  FaExclamationCircle,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

const TaskList = ({ tasks, fetchTasks, page, setPage, pages }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    status: "pending"
  });

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    }
  };

  const startEdit = (task) => {
    setEditingTaskId(task._id);
    setEditData({
      title: task.title,
      description: task.description,
      status: task.status
    });
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
  };

  const saveEdit = async (id) => {
    await API.put(`/tasks/${id}`, editData);
    setEditingTaskId(null);
    fetchTasks();
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <FaCheckCircle style={{ color: '#10b981', fontSize: '1.2rem' }} />;
      case 'in-progress':
        return <FaSpinner style={{ color: '#f59e0b', fontSize: '1.2rem' }} />;
      default:
        return <FaClock style={{ color: '#6b7280', fontSize: '1.2rem' }} />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return '#10b981';
      case 'in-progress':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#1f2937',
          margin: 0
        }}>
          ✨ Your Tasks
        </h2>
        <span style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          fontWeight: '500'
        }}>
          {tasks.length} total
        </span>
      </div>

      {tasks.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
          borderRadius: '1rem',
          border: '2px dashed #e5e7eb'
        }}>
          <FaExclamationCircle style={{
            fontSize: '3rem',
            color: '#9ca3af',
            marginBottom: '1rem'
          }} />
          <p style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#4b5563',
            margin: '0.5rem 0'
          }}>
            No tasks found
          </p>
          <p style={{
            color: '#6b7280',
            margin: 0
          }}>
            Create a new task to get started!
          </p>
        </div>
      ) : (
        <>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {tasks.map((task) => (
              <div
                key={task._id}
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  border: '1px solid #f3f4f6'
                }}
                onMouseEnter={(e) => {
                  if (!editingTaskId) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                {editingTaskId === task._id ? (
                  // Edit Mode
                  <div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#4b5563',
                        marginBottom: '0.25rem'
                      }}>
                        Title
                      </label>
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#4b5563',
                        marginBottom: '0.25rem'
                      }}>
                        Description
                      </label>
                      <textarea
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({ ...editData, description: e.target.value })
                        }
                        rows="3"
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#4b5563',
                        marginBottom: '0.25rem'
                      }}>
                        Status
                      </label>
                      <select
                        value={editData.status}
                        onChange={(e) =>
                          setEditData({ ...editData, status: e.target.value })
                        }
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          fontSize: '1rem',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="pending">⏳ Pending</option>
                        <option value="in-progress">⚡ In Progress</option>
                        <option value="completed">✅ Completed</option>
                      </select>
                    </div>

                    <div style={{
                      display: 'flex',
                      gap: '0.5rem',
                      justifyContent: 'flex-end'
                    }}>
                      <button
                        onClick={() => saveEdit(task._id)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.875rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#059669';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#10b981';
                        }}
                      >
                        <FaSave /> Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        style={{
                          padding: '0.5rem 1rem',
                          background: '#6b7280',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.875rem'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#4b5563';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#6b7280';
                        }}
                      >
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flex: 1
                      }}>
                        {getStatusIcon(task.status)}
                        <h3 style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#1f2937',
                          margin: 0,
                          wordBreak: 'break-word'
                        }}>
                          {task.title}
                        </h3>
                      </div>
                      <div style={{
                        display: 'flex',
                        gap: '0.5rem'
                      }}>
                        <button
                          onClick={() => startEdit(task)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            borderRadius: '0.5rem',
                            color: '#6b7280',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f3f4f6';
                            e.currentTarget.style.color = '#3b82f6';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'none';
                            e.currentTarget.style.color = '#6b7280';
                          }}
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteTask(task._id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            borderRadius: '0.5rem',
                            color: '#6b7280',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fee2e2';
                            e.currentTarget.style.color = '#ef4444';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'none';
                            e.currentTarget.style.color = '#6b7280';
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    
                    <p style={{
                      color: '#4b5563',
                      margin: '0 0 1.5rem 0',
                      lineHeight: '1.5',
                      fontSize: '0.95rem'
                    }}>
                      {task.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 'auto'
                    }}>
                      <select
                        value={task.status}
                        onChange={(e) => updateStatus(task._id, e.target.value)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          border: 'none',
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          outline: 'none',
                          backgroundColor: getStatusColor(task.status),
                          width: '140px'
                        }}
                      >
                        <option value="pending" style={{color: 'black'}}>⏳ Pending</option>
                        <option value="in-progress" style={{color: 'black'}}>⚡ In Progress</option>
                        <option value="completed" style={{color: 'black'}}>✅ Completed</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: page === 1 ? '#e5e7eb' : '#6366f1',
                  color: page === 1 ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (page !== 1) {
                    e.target.style.background = '#4f46e5';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (page !== 1) {
                    e.target.style.background = '#6366f1';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <FaChevronLeft /> Previous
              </button>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                {[...Array(pages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.5rem',
                        border: 'none',
                        background: page === pageNumber ? '#6366f1' : 'white',
                        color: page === pageNumber ? 'white' : '#4b5563',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: '500',
                        transition: 'all 0.3s',
                        boxShadow: page === pageNumber ? '0 4px 6px -1px rgba(99, 102, 241, 0.4)' : '0 1px 3px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={(e) => {
                        if (page !== pageNumber) {
                          e.target.style.background = '#f3f4f6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (page !== pageNumber) {
                          e.target.style.background = 'white';
                        }
                      }}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pages}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: page === pages ? '#e5e7eb' : '#6366f1',
                  color: page === pages ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: page === pages ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (page !== pages) {
                    e.target.style.background = '#4f46e5';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (page !== pages) {
                    e.target.style.background = '#6366f1';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}

          <div style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            Showing page {page} of {pages}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;