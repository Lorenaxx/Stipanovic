//Kreirati vlastite GET, POST, PUT, DELETE API-je za rad s objektom unutar vlastitog projekta

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/brojevi', (request, response) => {
    return response.send('Telefonski imenik');
});

app.post('/getkontakt', (request, response) => {
    return response.send('GET metoda -> Read');
});

app.post('/addkontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontaktBroj);
    console.log(data.ime);
    console.log(data.prezime);
    return response.send('POST metoda -> Add '+data.kontaktBroj+" "+data.ime+" "+data.prezime);
});

app.put('/updatekontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontaktBroj);
    console.log(data.ime);
    console.log(data.prezime);
    return response.send('PUT metoda -> Change '+data.kontaktBroj+" "+data.ime+" "+data.prezime);
});

app.delete('/deletekontakt', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.kontaktBroj);
    console.log('Delete '+data.ime);
    console.log('Delete '+data.prezime);
    return response.send('Delete '+data.kontaktBroj+" "+data.ime+" "+data.prezime);
});
app.listen(3001, () => {
    console.log("Server running on port 3000");
});