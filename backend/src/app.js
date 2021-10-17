const express = require("express");
const HttpError = require("./models/http-error");
const placesRouter = require("./routers/placesRouter");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/places", placesRouter);

//adding error middleware for unsupported routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route!", 404);
  next(error);
});

//adding middleware for error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.send({ message: error.message || "An unknown error occurred!" });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
