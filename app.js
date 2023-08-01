import express from "express";

const app = express();

app.use("/", (req, res, next) => {
  res.send("Hello from root path!");
  next();
});

app.listen(3000, () => {
  console.log("Server is connected!");
});
