const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");
const { body, param } = require("express-validator");

const router = express.Router();

router.use(protect);

router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("status")
      .optional()
      .isIn(["pending", "in-progress", "completed"])
      .withMessage("Invalid status")
  ],
  createTask
);

router.get("/", getTasks);

router.get(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid task id")],
  getTaskById
);

router.put(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid task id"),
    body("status")
      .optional()
      .isIn(["pending", "in-progress", "completed"])
      .withMessage("Invalid status")
  ],
  updateTask
);

router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid task id")],
  deleteTask
);

module.exports = router;