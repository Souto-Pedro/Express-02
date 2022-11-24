const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const cors = require("cors");

// necessario
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.end("testando 123");
});

app.use("/user-api", userRoutes);

app.listen(3001, () => console.log("O servidor está rodando"));
