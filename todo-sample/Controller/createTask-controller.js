const { check, validationResult } = require("express-validator");

//required schemas
const TaskList = require("../model/TaskList");
const Task = require("../model/Task");

exports.showAllTasks = async (req, res) => {
  const allTasks = await Task.find({});
  if (!allTasks) {
    res.status(404).json({
      error: "Task not Found",
    });
  }

  res.render("tasks", { allTasks });
};

exports.createNewTask = (req, res) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(422).redirect("/api/createTaskList");
  // }
  console.log(req.newTaskList);
  const newTask = new Task(req.body);
  newTask.save((err) => {
    if (err) {
      return res.status(400).redirect("/api/createtask");
    }
    res.status(200);
  });

};

exports.retrieveTaskid = (req, res)=> {
  const { id } = req.params;
  console.log(id);
  res.status(200).redirect("/api/createtasklist")
}

// exports.taskListPage = async (req, res) => {
//   const { id } = req.params;
//   const getTaskList = await TaskList.findById(id);
//   res.render("tasklist", { getTaskList });
// };

// exports.editTask = async (req, res) => {
//   const { id } = req.params;
//   const editTask = await TaskList.findById(id);
//   res.render("edit", { editTask });
// };

// exports.saveEditedTask = async (req, res) => {
//   const { id } = req.params;
//   const editedTask = await TaskList.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
//   res.redirect('/createtasklist');
// };

// exports.deleteTaskList = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedTask = await TaskList.findByIdAndDelete(id);
//     res.status(200).redirect("/createTaskList");
//   } catch (err) {
//     return res.status(400).redirect("/createTaskList");
//   }
// };
