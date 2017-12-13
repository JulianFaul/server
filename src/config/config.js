module.exports = {
    port: process.env.PORT || 9090,
    db:{
        database: process.env.DB_NAME   || 'scoutout',
        user    : process.env.DB_USER   || 'scoutout',
        password: process.env.DB_PASS   || 'scoutout',
        options :{
            dialect : process.env.DIALECT || 'sqlite',
            host    : process.env.HOST    || 'localhost',
            storage : './scoutout.sqlite'
        }
    },
    authentication:{
        jwtSecret : process.env.JWT_SECRET || 'secret'
    }
}