const {Product,Advertisement} = require('../models')
const _ = require('lodash')


module.exports = {

    async getProductById(req, res){
        try {
            
            let product = await Product.findById(req.params.productId)
            res.send(product)
        } catch (err) {
            res.status(500).send({
                // error: "An error has occured trying to get all Products"
            })
        }
    },
    async getAllProducts(req, res) {
        try {
            let products = await Product.findAll()
            res.send(products)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to get all Products"
            })
        }
    },
    async getAllProductsByCompanyID(req, res) {
        try {
            const {advertisement_id} = req.query
            const products = await Product.findAll(
                {
                where: {
                    advertisement_id : advertisement_id
                }
            }
        )
            res.send(products)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to get all Products by company id"
            })
        }
    },
    async post(req, res) {
        try {
            const advertisementId = req.body
            const product = await Product.create(req.body,{
                AdvertisementId : advertisementId
            })
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred trying to create the Product.'
            })
        }
    },
    async delete(req,res){
  
        try {
            const {productId} = req.params
           
            const product = await Product.findById(productId)
            await product.destroy()
    
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to delete product"
            })
        }
    },
    async put(req,res){
        try{
          const product = await Product.update(req.body,{
            where:{
              id: req.params.productId
            }
          })
          res.send(req.body)
        }catch(err){
          res.status(500).send({
              error: "An error has occured trying to update the advertisement"
          })
        }
    },
}