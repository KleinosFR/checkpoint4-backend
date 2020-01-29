const Sequelize = require("sequelize");
const sequelize = require("../index");

const Price = sequelize.define(
    "Price",
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
        adultPrice: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        childPrice: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        groupPrice: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        schoolPrice: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    },
    {}
);

module.exports = Price;
