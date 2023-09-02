const { Client } = require('./index.js');
const client = new Client({
    host: '192.168.0.176',
    port: 6053,
    learSession: false,
    initializeDeviceInfo: true,
    initializeListEntities: true,
    initializeSubscribeStates: true,
    initializeSubscribeLogs: false,
    // encryptionKey: '', // Use encryption key
    // password: '', // Insert password if you have any (Deprecated)
});

client.connect();
// Key: 90329313
// Args: time_to_start INT
// client.on('connected', () => {
//     console.log("Connected!");
//     //console.log(client)
//     //connection.pingService();
// });
// client.on('newEntity', logs => {
//     console.log("newEntity!");
//     console.log(client.entities)
//     //connection.pingService();
// });

// client.on('logs', logs => {
//     console.log("logs!");
//     console.log(client.logs)
//     //connection.pingService();
// });
client.on('initialized', connection => {
    console.log("Initialized!");
    console.log("Sending service command...");
    console.log(client.connection.serviceCommandService({ key: 1353178594, args: { time: 5 } }));
});
client.on('initialized', connection => {
    console.log("Initialized!");
    console.log("Sending service command...");
    console.log(client.connection.switchCommandService({ key: 391537630, state: true}));
});
client.on('initialized', connection => {
    console.log("Listing services!");
    client.connection.listEntitiesService().then(data => {
        console.log(data[4].entity.argsList)
        if (data.includes("Services")) console.log(data.entity.argslist)
    });
});
// client.serviceCommandService({ key: 90329313, args: [ { "time_to_start": 5 } ]});