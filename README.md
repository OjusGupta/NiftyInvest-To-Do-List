To-Do List Application

A simple, full-stack To-Do List App built with Express.js, EJS templates, and MongoDB. This project helps you organize your daily tasks with an interactive and minimal user interface.
Features

    Add, edit, and delete tasks

    Mark tasks as complete/incomplete

    Filter tasks by status

    Search tasks by keyword

    Responsive and clean UI

    Persistent storage with MongoDB

    Server-side rendering with EJS

Tech Stack
Layer	Technology
Frontend	HTML, CSS, EJS
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Getting Started
Prerequisites

    Node.js (v14+ recommended)

    MongoDB (local or Atlas)

Installation

bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
npm install

Configuration

    Create a .env file in the root directory.

    Add your MongoDB connection string:

    text
    MONGODB_URI=your_mongodb_connection_string

Running the App

bash
npm start

The app will run on http://localhost:3000.
Folder Structure

text
├── models/         # Mongoose schemas
├── public/         # Static assets (CSS, JS)
├── routes/         # Express routes
├── views/          # EJS templates
├── .env
├── app.js          # Main server file
├── package.json

Usage

    Add Task: Use the input field to add a new task.

    Mark Complete: Click the checkbox to mark as done.

    Edit/Delete: Use the edit or delete icons next to each task.

    Filter/Search: Use the filter dropdown or search bar for quick navigation.

Customization

    Modify EJS templates in /views for UI changes.

    Update styles in /public/styles.css.

    Extend Mongoose models in /models.
