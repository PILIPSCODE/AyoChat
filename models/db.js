const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB,connectionParams);
        console.log('success Conection to MongoDb')
    } catch (error) {
        console.log(error);
        console.log("cannot Connect to Mongodb")
    }
}