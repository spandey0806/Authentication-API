const express = require("express");
const routes = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
