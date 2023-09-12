const mongoose = require('mongoose');


const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI ,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : true
    })
    console.log(`MongoDB Connected : ${conn.connection.host}`)
};

module.exports = connectDb;

