module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        name: {
            type: DataTypes.STRING,
            notNull: true,
            notEmpty: true,
            allowNull: true,
            validate: {

            }

        }

    },{
        timestamps: false,

    });

    return Item;
};