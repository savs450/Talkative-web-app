const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://savs2728:Savs123@cluster0.ejjrn9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser : true,
            useUnifiedTopology :true,
            
        })
    console.log(`MongoDb connected : ${conn.connection.host}`)
    }
    catch(err){
        console.log(err.message)
        process.exit()
    }
}
module.exports = connectDB