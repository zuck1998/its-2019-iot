// package npm: https://www.npmjs.com/package/@aspnet/signalr
// includere il file signalr.min.js

var url = "https://its-chat.azurewebsites.net/chatHub";

var connection = new signalR.HubConnectionBuilder().withUrl(url).build();

connection.on("ReceiveMessage", function (user, message) {
    // codice eseguito quando ricevete un messaggio
});

connection.start().then(function () {
 
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {


    // codice per inviare un messaggio a tutti
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });

    event.preventDefault();
});