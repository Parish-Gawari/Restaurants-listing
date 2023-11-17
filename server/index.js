const express = require("express");
const app = express();
const sequelize = require("./database/connectDB");
const crudRouter = require("./routes/crud");
const cors = require("cors");

app.use(cors());
app.use(express.json());

connectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been Estalished Successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
};
connectMySql();

app.use("/crud", crudRouter);
app.listen(8090, () => {
  console.log("Srever running on port 8090");
});
