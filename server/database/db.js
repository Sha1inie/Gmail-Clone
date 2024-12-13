import mongoose from "mongoose";
// import dotenv from 'dotenv';

//dotenv.config();

//const USERNAME = process.env.DB_USERNAME;
//const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
   //const DB_URI = `mongodb://shalinirana:gmailclonee@gmailclonee-shard-00-00.bhvme.mongodb.net:27017,gmailclonee-shard-00-01.bhvme.mongodb.net:27017,gmailclonee-shard-00-02.bhvme.mongodb.net:27017/?ssl=true&replicaSet=atlas-ur5x10-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclonee`;
    const DB_URI =  `mongodb+srv://shalinirana:gmailclonee@gmailclonee.bhvme.mongodb.net/?retryWrites=true&w=majority&appName=gmailclonee`;
    try {
      mongoose.connect(DB_URI);
       // mongoose.set('strictQuery', false);
       console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;