const {Advertisement,Product} = require('../models')

module.exports = {
  async getAllAdvertisements(req,res){
    try{
      let advertisements = null
      const search = req.query.search
      if(search){
        advertisements = await Advertisement.findAll({
          where:{
            $or:[
              'companyName','category','description'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      }else{
        advertisements = await Advertisement.findAll()
      }
      
      res.send(advertisements)
    }catch(err){
      res.status(500).send({
          error: "An error has occured trying to get all advertisements"
      })
    }
},

  async post(req,res){
      try{
        const advertisement = await Advertisement.create(req.body)
        res.send(advertisement)
      }catch(err){
        res.status(500).send({
            error: "An error has occured trying to create the advertisement"
        })
      }
  },
  async show(req,res){
      try{
        const advertisement = await Advertisement.findById(req.params.companyId)
        res.send(advertisement)
      }catch(err){
        res.status(500).send({
            error: "An error has occured trying to get a advertisement"
        })
      }
  },
  async put(req,res){
    try{
      const advertisement = await Advertisement.update(req.body,{
        where:{
          id: req.params.advertisementId
        }
      })
      res.send(req.body)
    }catch(err){
      res.status(500).send({
          error: "An error has occured trying to update the advertisement"
      })
    }
},
  async delete(req,res){
        try {
            const { advertisementId } = req.params
            const advertisement = await Advertisement.findById(advertisementId)
            await advertisement.destroy()
            res.send(advertisement)
        } catch (err) {
            res.status(500).send({
                error: "An error has occured trying to delete advertisement"
            })
        }
    }
}