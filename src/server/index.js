const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const NodeCouchDb = require("node-couchdb");

const couch = new NodeCouchDb({
  auth: {
    user: 'mastering-angular',
    password: 'master'
  }
});

couch.listDatabases().then((dbs) => console.log(dbs));

const app = express();
const port = 3000;
const db = 'superheroes';
const viewUrl = '_design/all_superheroes/_view/all';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  couch.get(db, viewUrl).then(
    (data, headers, status) => {
      console.log(data);
      res.send(data);
    }, (err) => {
      res.send(err);
    })
});

app.post('/superheroes', () => {
  const superhero = {
    name: "Silver Surfer",
    canFly: true,
    powers: ['all'],
    origin: 'Infinite'
  };

  couch.uniqid().then((ids) => {
    const id = ids[0];
    couch.insert('superheroes', {
      _id: id,
      name: superhero.name,
      canFly: superhero.canFly,
      origin: superhero.origin
    }).then((data, headers, status) => {
      res.send(data);
      res.status(200).send('Success 1')
    }, (err) => {
      res.send(err);
    });
  });
});

app.listen(port, () => console.log(`Cosmic Superheroes app listening on port ${port}!`))