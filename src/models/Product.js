module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productName    :  DataTypes.STRING,
        advertisement_id: DataTypes.INTEGER
    })
    return Product
}    