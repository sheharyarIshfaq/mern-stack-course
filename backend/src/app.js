const express = require("express");
const placesRouter = require("./routers/placesRouter");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/places", placesRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
