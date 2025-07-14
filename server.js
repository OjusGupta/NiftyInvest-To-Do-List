// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const path = require('path');
//
// const routes = require("./routes/ToDoRoutes");
// const cors = require('cors');
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
//
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));
//
// app.use("/", routes);
//
// app.listen(PORT, () => console.log(`Listening at ${PORT}...`));

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const routes = require("./routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

// Use your routes
app.use("/", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
