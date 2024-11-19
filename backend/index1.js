//Kreirati vlastite GET, POST, PUT, DELETE API-je za rad s objektom unutar vlastitog projekta

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let brojevi = [
    {
        "id": 1,
        "broj": "0998294719",
        "ime": "Maja",
        "prezime": "Majić",
    },
    {
        "id": 2,
        "broj": "0995029254",
        "ime": "Pero",
        "prezime": "Perić",
    },
]
//READ -> GET API
app.get('/brojevi', (request, response) => {
    return response.send('Telefonski imenik');
});

app.post('/getkontakt/:id', (request, response) => {
    let id=request.params.id;
    let broji="";
    brojevi.forEach(element => {
        if(element.id==id){
            broji=JSON.stringify(element);
        }

    });
    return response.send('Dohvat broja'+broj);
});
//CREATE -> POST API
app.post('/addkontakt', (request, response) => {
    const data = request.body;
    const broj=data.kontaktBroj;
    const ime=data.ime;
    const prezime=data.prezime;
    console.log(data.kontaktBroj);
    console.log(data.ime);
    console.log(data.prezime);

    let broji={
        "id": brojevi.length+1,
        "broj": broj,
        "ime": ime,
        "prezime": prezime,
    };
    brojevi.push(broji);
    return response.send('Dodavanje kontakta u telefonski imenik:' +JSON.stringify(brojevi));
        //'+data.kontaktBroj+" "+data.ime+" "+data.prezime);
});
//UPDATE -> PUT API
app.put('/updatekontakt/:id', (request, response) => {
    let id=request.params.id;
    const data = request.body;
    const broj=data.kontaktBroj;
    const ime=data.ime;
    const prezime=data.prezime;
    console.log(data.kontaktBroj);
    console.log(data.ime);
    console.log(data.prezime);
    return response.send('Ažuriranje brojeva s id'+id+" "+data.kontaktBroj+" "+data.ime+" "+data.prezime);
});
//DELETE -> DELETE API
app.delete('/deletekontakt/:id', (request, response) => {
    let id=request.params.id;
    brojevi.forEach(element => {
        if(element.id==id){
            brojevi.pop(element);
        }

    });
    return response.send('Brisanje brojeva s id '+id+ "Novi popis" +JSON.stringify(brojevi));
});
app.listen(3001, () => {
    console.log("Server running on port 3001");
});