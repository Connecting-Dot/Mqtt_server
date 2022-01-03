const {MongoClient} = require('mongodb');
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const mongoose = require("mongoose");
const expres = require("express");
const MONGO_URI = 'mongodb+srv://pkpratik1998:qwertyuiop@vehicledb.7iyox.mongodb.net/test?retryWrites=true&w=majority'
const vehicledata1 = require("../Schema/schema.js");
const vehicledata2 = require("../Schema/schema.js");
// Step 2
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vehicledb', {
mongoose.connect(MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//This is new part
const db_client2 = new MongoClient(MONGO_URI);
db_client2.connect();
client.on("connect", () =>{
    client.subscribe("Sunag");
    client.subscribe("Pratik");
    console.log("client has subscribed to U1V1");
});
client.on("message", (topic, message) =>
{
    // console.log(message);
    if(topic === 'Sunag'){
        console.log(topic);
        console.log(message.toString());
        db_client2.db("test").collection("vehicle1").insertOne(JSON.parse(message));
    }
    if(topic === 'Pratik'){
        console.log(topic);
        console.log(message.toString());
        db_client2.db("test").collection("vehicle2").insertOne(JSON.parse(message));  
    }

});
