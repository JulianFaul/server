module.exports = (sequelize, DataTypes) => {
    const AdvertisementLike = sequelize.define('AdvertisementLike', {})

    AdvertisementLike.associate = function(models){
        AdvertisementLike.belongsTo(models.User)
        AdvertisementLike.belongsTo(models.Advertisement)
    }

    return AdvertisementLike
}    