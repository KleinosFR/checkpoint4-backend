const Sequelize = require("sequelize");
const sequelize = require("../index");

const Act = sequelize.define(
    "Act",
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        decription: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {}
);

module.exports = Act;
