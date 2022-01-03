const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const obj = require("../jsondata2.json");
`client.on("connect", () =>{
    let i=0;
        setInterval(() => {
            // vehicalData.push({name: obj[0].name});
            client.publish("Arnav", JSON.stringify(obj[i++])
            );
    },10000);
});`
//This part is new
const obj2 = require("../U1V1.json");
const obj3 = require("../U1V3.json");
client.on("connect", () =>{
    let i=0;
    let j=0;
        setInterval(() => {
            //1st vehicle
            client.publish("Sunag", JSON.stringify(obj2[i++]));
            client.publish("Pratik", JSON.stringify(obj3[j++])
            );
    }, 10000);
});