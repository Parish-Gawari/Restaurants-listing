const { Sequelize, DataTypes, where } = require("sequelize");
const sequelize = new Sequelize("assignment", "admin", "mPSKSmJs", {
  host: "mysql-154596-0.cloudclusters.net",
  dialect: "mysql",
  port: "18258",
});
const Data = sequelize.define("list", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const CreateData = async (body) => {
  return await Data.create(body);
};

const readALL = async () => {
  return await Data.findAll();
};

const readData = async (id) => {
  return await Data.findOne({
    where: {
      id: id,
    },
  });
};

const updateData = async (body, id) => {
  return await Data.update(
    { name: body.name, contact: body.contact, address: body.address },
    {
      where: {
        id: id,
      },
    }
  );
};

const deleteData = async (id) => {
  return await Data.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  CreateData,
  deleteData,
  updateData,
  readALL,
};
