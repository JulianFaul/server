const {Test} = require('../models')

module.exports = {
  async getAllTests(req,res){
    try{
      const tests = await Test.findAll({
       limit : 10
      })
      res.send(tests)
    }catch(err){
      res.status(500).send({
          error: "An error has occured trying to get all tests"
      })
    }
},

  async post(req,res){
      try{
        const test = await Test.create(req.body)
        res.send(test)
      }catch(err){
        res.status(500).send({
            error: "An error has occured trying to create the test"
        })
      }
  }
}