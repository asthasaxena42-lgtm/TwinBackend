require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());

const appearanceRoutes = require("./routes/routes");

app.use("/appearance", appearanceRoutes);

app.get("/", (req, res) => {
    res.send("Twin AI Backend Working!");
});

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});