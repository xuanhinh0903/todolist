import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hello, TypeScript with Express!"
  );
});

app.get("/home/:homeId", (req, res) => {
  res.send(
    "POST request to the homepage"
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});

export default app;
