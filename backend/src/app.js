const fs = require("fs");

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");
const placesRouter = require("./routers/placesRouter");
const usersRouter = require("./routers/usersRouter");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(
  "/src/uploads/images",
  express.static(path.join("src", "uploads", "images"))
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/places", placesRouter);
app.use("/api/users", usersRouter);

//adding error middleware for unsupported routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route!", 404);
  next(error);
});

//adding middleware for error handling
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (error) => {
      console.log(error);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.send({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://sheharyar:sheharyar@cluster0.pwoor.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then(
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
