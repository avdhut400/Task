# 📝 Full Stack Task Management Application

A production-ready Task Management App built with **Node.js, Express, MongoDB, JWT (HTTP-only cookies), and React (Vite)**.

---

## 📋 Table of Contents
- [Live URLs](#-live-urls)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Local Setup](#-local-setup)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Project Structure](#-project-structure)
- [Evaluation Criteria](#-evaluation-criteria)
- [Author](#-author)

---

## 🔗 Live URLs

- **Frontend (Vercel):** [https://task-black-tau.vercel.app](https://task-black-tau.vercel.app)
- **Backend (Render):** [https://task-6kqd.onrender.com](https://task-6kqd.onrender.com)
- **API Base URL:** [https://task-6kqd.onrender.com/api](https://task-6kqd.onrender.com/api)

---

## 🚀 Features

### 🔐 Authentication
- User Registration & Login
- JWT-based authentication stored in HTTP-only cookies
- Password hashing with bcrypt
- Protected routes (frontend + backend)
- Persistent login sessions

### 📝 Task Management
- ✅ Create tasks with title, description, and status
- 📋 View all tasks with pagination
- 🔍 Search tasks by title
- 🏷️ Filter tasks by status (pending/completed)
- ✏️ Edit task details
- 🗑️ Delete tasks
- 📱 Responsive design

### 🛡️ Security
- HTTP-only cookies for JWT storage
- CORS configured for cross-origin requests
- Secure cookie configuration for production
- Input validation using express-validator
- Global error handling
- Environment variables for sensitive data

---

## 🏗️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB (Mongoose) | Database & ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| express-validator | Input validation |
| cookie-parser | Cookie management |
| CORS | Cross-origin resource sharing |

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI library |
| Vite | Build tool |
| Axios | HTTP client |
| React Router | Navigation |
| CSS Modules | Styling |

### Deployment
- **Backend:** Render
- **Frontend:** Vercel
- **Database:** MongoDB Atlas

---

## ⚙️ Environment Variables

### Backend (.env)
Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
CLIENT_URL=https://task-black-tau.vercel.app
```

📁 Project Structure

```bash
Task/
├── server/                 # Backend
│   ├── controllers/        # Route controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── models/            # Mongoose models
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/            # Express routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/        # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── utils/             # Utility functions
│   ├── .env               # Environment variables
│   └── server.js          # Entry point
│
├── client/                 # Frontend
│   ├── src/
│   │   ├── api/           # API calls
│   │   ├── context/       # React context
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   └── App.jsx        # Main component
│   └── package.json
│
└── README.md
```

🛣️ API Routes

```bash
🔐 Authentication Routes (/api/auth)
All authentication routes are public (no token required).

Method	Endpoint	Description	Request Body	Response
POST	/register	Register new user	{ name, email, password }	{ success, user }
POST	/login	Login user	{ email, password }	{ success, user }
GET	/me	Get current user	-	{ success, user }
POST	/logout	Logout user	-	{ success, message }

```
👤 Author
Avdhut

GitHub: @avdhut400

Project: Task Management App

📝 License

MIT License - feel free to use this project for learning or development.



