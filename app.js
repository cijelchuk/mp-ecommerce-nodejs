const express = require("express");
const engine = require("ejs-mate");
const bodyParser = require("body-parser");
const path = require("path");
const createError = require("http-errors");
const session = require("express-session");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

//require routes
const indexRouter = require("./routes/index");

var app = express();
//o88AuNrOhStCLOT3
//DB Connection
const MongoDBURL =
  "mongodb+srv://dbuser:o88AuNrOhStCLOT3@cluster0.ovfvu.mongodb.net/mp_test?ssl=true&authSource=admin&w=majority";

//process.env.MONGODB_URI || "mongodb://localhost:27017/mp-ecommerce-nodejs";
mongoose.connect(MongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we're connected to database!");
});

// use ejs-locals for all ejs templates:
app.engine("ejs", engine);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
//setup express-sessions
app.use(
  session({
    secret: "puto el que lee!",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  //set success flash message
  res.locals.success = req.session.success || "";
  delete req.session.success;
  //set error flash message
  res.locals.error = req.session.error || "";
  delete req.session.error;
  if (res.locals.error) console.log("ERROR_PRE_ROUTE:", res.locals.error);
  //continue on to next function in middleware chain
  next();
});

//mount routes
app.use("/", indexRouter);
app.use(express.static("assets"));

app.use("/assets", express.static(__dirname + "/assets"));

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.message) console.log("ERROR_HANDLER:", err);
  req.session.error = err.message; //save error
  res.redirect("back"); //go back
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}!`);
});

module.exports = app;
