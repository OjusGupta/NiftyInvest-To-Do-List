// const ToDoModel = require('../models/ToDoModel');
//
// module.exports.renderToDoList = async (req, res) => {
//   try {
//     const todos = await ToDoModel.find().lean();
//     res.render('index', { todos, error: null });
//   } catch (error) {
//     res.render('index', { todos: [], error: 'Failed to load todos' });
//   }
// };
//
// module.exports.saveToDo = async (req, res) => {
//   try {
//     await ToDoModel.create({ toDo: req.body.toDo });
//     res.redirect('/get');
//   } catch (error) {
//     res.render('index', { todos: [], error: 'Failed to save todo' });
//   }
// };
//
// module.exports.updateToDo = async (req, res) => {
//   try {
//     await ToDoModel.findByIdAndUpdate(req.params.id, { toDo: req.body.toDo });
//     res.redirect('/get');
//   } catch (error) {
//     res.render('index', { todos: [], error: 'Failed to update todo' });
//   }
// };
//
// module.exports.deleteToDo = async (req, res) => {
//   try {
//     await ToDoModel.findByIdAndDelete(req.params.id);
//     res.redirect('/get');
//   } catch (error) {
//     res.render('index', { todos: [], error: 'Failed to delete todo' });
//   }
// };

const ToDoModel = require('../models/ToDoModel');

module.exports.renderToDoList = async (req, res) => {
  try {
    const todos = await ToDoModel.find().lean();
    res.render('views/index', { todos, error: null });
  } catch (error) {
    res.render('index', { todos: [], error: 'Failed to load todos' });
  }
};

module.exports.saveToDo = async (req, res) => {
  try {
    await ToDoModel.create({ toDo: req.body.toDo });
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: null });
  } catch (error) {
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: 'Failed to save todo' });
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    await ToDoModel.findByIdAndUpdate(req.params.id, { toDo: req.body.toDo });
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: null });
  } catch (error) {
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: 'Failed to update todo' });
  }
};

module.exports.deleteToDo = async (req, res) => {
  try {
    await ToDoModel.findByIdAndDelete(req.params.id);
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: null });
  } catch (error) {
    const todos = await ToDoModel.find().lean();
    res.render('index', { todos, error: 'Failed to delete todo' });
  }
};
