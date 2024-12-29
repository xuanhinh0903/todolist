import express from "express";
import dotenv from "dotenv";
const cors = require("cors");
const routes = require("./routes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
const PORT = process.env.PORT || 4000;

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});

export default app;
