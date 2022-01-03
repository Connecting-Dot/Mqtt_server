const {MongoClient} = require('mongodb');
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const mongoose = require("mongoose");
const expres = require("express");
const MONGO_URI = 'mongodb+srv://pkpratik1998:qwertyuiop@vehicledb.7iyox.mongodb.net/test?retryWrites=true&w=majority'
// Step 2
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vehicledb', {
mongoose.connect(MONGO_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});
`const db_client1 = new MongoClient(MONGO_URI);
db_client1.connect();
client.on("connect", () =>{
    client.subscribe("Arnav");
    console.log("client has subscribed");
});
client.on("message", (topic, message) =>
{
    // console.log(message);
    console.log(message.toString());
    db_client1.db("vehicledb").collection("vehicledata3").insertOne(JSON.parse(message));
});`

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

// const db_client3 = new MongoClient(MONGO_URI);
// db_client3.connect();
// client.on("connect", () =>{
    
//     console.log("client has subscribed to U1V3");
// });
// client.on("message", (topic, message) =>
// {
//     // console.log(message);
//     console.log(topic);

//     console.log(message.toString());
//     db_client3.db("test").collection("vehicle2").insertOne(JSON.parse(message));
// });
// const data = JSON.parse(message);
    // console.log("data :" + String(data));