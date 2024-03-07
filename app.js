const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const bodyparser = require("body-parser");
const config = require("./config/dbconnection.json");
const path = require("path");
const { addchat } = require("./controller/userController");
const {
  addpartiesocket,
  affichestatsocket,
} = require("./controller/partieController");
mongo
  .connect(config.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

  .then(() => console.log("database connected"))
  .catch(() => console.log("not connected"));

const userRouter = require("./routes/users");
const classroomRouter = require("./routes/classroom");
const classRouter = require("./routes/class");
const partieRouter = require("./routes/partie");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(bodyparser.json());

app.use("/user", userRouter);
app.use("/classroom", classroomRouter);
app.use("/class", classRouter);
app.use("/partie", partieRouter);

const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  socket.emit("msg", "user is connected");

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("partie", (data) => {
    addpartiesocket(data);
    io.emit("partie", data);
  });

  socket.on("aff", async (data) => {
    const newdata = await affichestatsocket(data);
    console.log(JSON.stringify(newdata));
    io.emit("aff", newdata);
  });
  socket.on("disconnect", () => {
    io.emit("msg", "user is disconnected");
  });
});

server.listen(3000, console.log("server run"));

module.exports = app;
