const Sequelize = require("sequelize");
const sequelize = require("../index");

const Artist = sequelize.define(
    "Artist",
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        decription: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {}
);

module.exports = Artist;
