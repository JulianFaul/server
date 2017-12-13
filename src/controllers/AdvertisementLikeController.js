const { AdvertisementLike, Advertisement, User } = require('../models')
const _ = require('lodash')

module.exports = {
    async getAllAdvertisementLikes(req, res) {
        try {
            const { advertisementId, userId } = req.query
            const where = {
                UserId : userId
            }
            if(advertisementId){
                where.AdvertisementId = advertisementId
            }
            const advertisementLikes = await AdvertisementLike.findAll({
                where: where,
                include:[
                    {
                        model : Advertisement
                    }
                ]
            })
            .map(advertisementLike => advertisementLike.toJSON())
            .map(advertisementLike => _.extend(
                {},
                advertisementLike.Advertisement,
                advertisementLike
                ))

            res.send(advertisementLikes)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to get all advertisements"
            })
        }
    },
    async post(req, res) {
        try {
            const { advertisementId, userId } = req.body
            const advertisementLike = await AdvertisementLike.findOne({
                where: {
                    AdvertisementId: advertisementId,
                    UserId: userId
                }
            })
            if (advertisementLike) {
                res.status(400).send({
                    error: "You already liked this"
                })
            }
            const newAdvertisementLike = await AdvertisementLike.create({
                AdvertisementId: advertisementId,
                UserId: userId
            })
            res.send(newAdvertisementLike)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create the advertisementLike.'
            })
        }
    },

    async delete(req, res) {
        try {
            const { advertisementLikeId } = req.params
            console.log(advertisementLikeId)
            const advertisementLike = await AdvertisementLike.findById(advertisementLikeId)
            await advertisementLike.destroy()
            res.send(advertisementLike)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to delete advertisementLike"
            })
        }
    }
}