const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const mongoose = require("mongoose");
const expres = require("express");
client.on("connect", () =>{
    client.subscribe("Arnav");
    console.log("client has subscribed");
});
client.on("message", (topic, message) =>
{
    // console.log(message);
    console.log(message.toString());
});




// const data = JSON.parse(message);
    // console.log("data :" + String(data));