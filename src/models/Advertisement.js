module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define('Advertisement', {
        companyName    :  DataTypes.STRING,
        telephoneNumber:  DataTypes.STRING,
        cellphoneNumber:  DataTypes.STRING,
        facebookURL    :  DataTypes.TEXT,
        description    :  DataTypes.STRING,
        email          :  DataTypes.STRING,
        logo           :  DataTypes.TEXT,
        imageURL       :  DataTypes.TEXT,
        website        :  DataTypes.TEXT,
        address        :  DataTypes.STRING,
        category       :  DataTypes.STRING
    })

    Advertisement.associate = function(models){
        Advertisement.hasMany(models.Product,{
            foreignKey: "advertisement_id"
        })
    }

    return Advertisement
}    