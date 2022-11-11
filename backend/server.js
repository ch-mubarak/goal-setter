require("dotenv").config();
const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRoute = require("./routes/goals");

app.use("/api/goals", goalRoute);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
