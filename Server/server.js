const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const handleError = require("./middleweres/error");
const { clerkMiddleware } = require("@clerk/express");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(clerkMiddleware());
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.use(handleError);

const port = 5000;
app.listen(port, () => console.log("server running on port " + port + "..."));
