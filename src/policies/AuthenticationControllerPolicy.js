const Joi = require('joi')

module.exports = {
    register(req,res,next){
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            firstName : Joi.string(),
            lastName : Joi.string(),
            isAdmin : Joi.boolean()
        }
        
        const {error, value} = Joi.validate(req.body,schema)
        if(error){
            switch (error.details[0].context.key){
                case 'email' :
                res.status(400).send({
                    error: 'You must provide a valid email address'
                }) 
                break
                case 'password' :
                res.status(400).send({
                    error: "Your Password must be atleast 8 characters"
                })
                break
                case 'firstName' :
                res.status(400).send({
                    error: "Your first name can only contain Letters"
                })
                break
                case 'lastName' :
                res.status(400).send({
                    error: "Your last name can only contain Letters"
                })
                break
                default :
                res.status(400).send({
                    error: "Invalid registration information"
                })
            }
        }else{
            next()
        }
        
    }
}