const Sequelize = require("sequelize");
const sequelize = require("../index");

const Show = sequelize.define(
    "Show",
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zipcode: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false
        },
        decription: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {}
);

module.exports = Show;
