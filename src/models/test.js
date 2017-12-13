module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('Test', {
        name    :  DataTypes.STRING,
        number  : DataTypes.STRING
    })
    return Test
}