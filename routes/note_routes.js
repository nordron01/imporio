var ObjectID = require('mongodb').ObjectID;
const fs = require('fs')
module.exports = function(app, db) {
  /*app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });

  });*/


app.get('/', function(req, res){
    var html = fs.readFileSync('index.html');
    //res.header("Content-Type", "text/html");
    res.render(html);
});



app.post('/notes', (req, res) => {

    //const note = { text: req.body.body, title: req.body.title };
     res.send('POST request to the homepage');
     
    /*
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
    */

  });


app.get('/about', function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.send('about');
});



};