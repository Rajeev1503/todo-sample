const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  createNewTask,
  showAllTasks,
  retrieveTaskid,
} = require("../Controller/createTask-controller");

// router.param("tasklistnameId", getUserById);

router.get("/createtask", showAllTasks);

router.post("/createtask", createNewTask);

// router.get('/createtask/:id', taskListPage);

// router.get('/createtask/:id/edit', editTask);

// router.put('/createtask/:id', saveEditedTask);

// router.delete('/createtask/:id', deleteTaskList);

module.exports = router;
