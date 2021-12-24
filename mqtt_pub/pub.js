const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const obj = require("../vehicledata2.json");
client.on("connect", () =>{
    let i=0;
        setInterval(() => {
            // vehicalData.push({name: obj[0].name});
            client.publish("Arnav", JSON.stringify(obj[i++])
            );
    },10000);
});