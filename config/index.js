
//load env
require('dotenv').config();


module.exports = {
    port: process.env.PORT || 8000,
    db: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};