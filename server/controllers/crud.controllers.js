const {
  CreateData,
  deleteData,
  updateData,

  readALL,
} = require("../database/dataModel");

const Controller = {
  Post: (req, res) => {
    const body = req.body;
    CreateData(body)
      .then((data) => {
        res.json({
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },

  Get: (req, res) => {
    const id = req.params.id;
    readALL()
      .then((data) => {
        res.json({
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  Put: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    updateData(body, id)
      .then((result) => {
        res.json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },

  Delete: (req, res) => {
    const id = req.params.id;
    deleteData(id)
      .then((result) => {
        res.json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
};

module.exports = Controller;
