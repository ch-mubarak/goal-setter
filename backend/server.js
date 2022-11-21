require("dotenv").config();
const express = require("express");
const colors = require("colors");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRoute = require("./routes/goals");
const userRoute = require("./routes/user");

app.use("/api/goals", goalRoute);
app.use("/api/users", userRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is up and running on port ${PORT.rainbow}`.yellow)
);
