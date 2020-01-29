const Act = require("./models/acts");
const Artist = require("./models/artists");
const Show = require("./models/shows");
const Price = require("./models/prices");

Artist.hasMany(Act, { foreignKey: { allowNull: false } });
Act.belongsTo(Artist, { foreignKey: { allowNull: false } });

Price.hasMany(Show, { foreignKey: { allowNull: false } });
Show.belongsTo(Price, { foreignKey: { allowNull: false } });
