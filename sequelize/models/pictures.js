const Sequelize = require("sequelize");
const sequelize = require("../index");

const Picture = sequelize.define(
    "Picture",
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
        description: {
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

module.exports = Picture;
