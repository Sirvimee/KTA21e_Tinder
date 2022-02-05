import express from 'express'; // annab teada, et projekti vaatamiseks on vaja käivitada express
import { Homepage } from './views/Homepage.js';
import { MainLayout } from './views/MainLayout.js';
import { SignUp } from './views/SignUp.js';
var app = express(); // käivitab expressi (ruuteräpi)
app.use(express.urlencoded());

let currentUser = `Meeli`

app.get('/', function(req, res){
    let page = MainLayout(Homepage(currentUser));
    res.send(page);
  });

app.get('/add', function(req, res){
    res.send("Lisamise leht<a href='/'>Tagasi</a>");
  });

  app.get('/register', function(req, res){
    let page = MainLayout(content, "sign Up");
    res.send(page);
  });

  app.post('/register', function(req, res){
      console.log(req.body)
   
      let content = `Tere ${req.body.name}! Sinu konto on loodud.<br><a href='/'>Tagasi</a>`
      let page = MainLayout(content, "sign Up");
    res.send(page);
  });

app.listen(3000); // saab sellele pordile ligi http://localhost:300/