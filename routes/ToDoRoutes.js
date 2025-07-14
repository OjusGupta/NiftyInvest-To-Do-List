// const { Router } = require("express");
// const {
//   renderToDoList,
//   saveToDo,
//   updateToDo,
//   deleteToDo
// } = require("../controller/ToDoController");
//
// const router = Router();
//
// router.get("/", renderToDoList);
// router.get("/get", renderToDoList); // Added /get route
//
// router.post("/save", saveToDo);
// router.post("/update/:id", updateToDo);
// router.post("/delete/:id", deleteToDo);
//
// module.exports = router;

const { Router } = require("express");
const {
  renderToDoList,
  saveToDo,
  updateToDo,
  deleteToDo
} = require("../controller/ToDoController");

const router = Router();

// Render the ToDo list (main page)
router.get("/", renderToDoList);

// Add a new ToDo
router.post("/save", saveToDo);

// Update a ToDo
router.post("/update/:id", updateToDo);

// Delete a ToDo
router.post("/delete/:id", deleteToDo);

module.exports = router;
