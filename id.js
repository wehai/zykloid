/* import express from 'express'
import bodyParser from 'body-parser';
import Datastore from '@seald-io/nedb';
import fs from 'fs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;



const database = new Datastore({filename:'database.db'});
try {
   await database.loadDatabaseAsync()
 } catch (error) {
   // loading has failed
 }

try {
   const count = await database.countAsync({user})
   console.log(count);
 } catch (error) {
   // if an error happens
 }

app.use(express.static('public'));
app.use(express.json({limit: '5mb',extended: true}));

app.use(bodyParser.urlencoded({limit: '5mb',extended: true}));

app.get('/', function(req, res){
   res.sendFile( __dirname + '/public/index.html');
});

app.get('/signUp', function(req, res){
   res.sendFile( __dirname + '/public/signUp.html');
});

app.get('/draw', function(req, res){
 //const drawpath = readFileSync(new URL('public/draw.html', import.meta.url));
 res.sendFile( __dirname + '/public/draw.html');
});
app.get('/gallery', function(req, res){
   res.sendFile( __dirname + '/public/gallery.html');
});

app.post('/signUp', function(req, res, user ) {
   
   const data = req.body;

   //newuser= newuser +1; 


//let newuser = 1000 + nu();
   let RZ=0; //RUndenanzahl
   let SZ=0;// spieleranzahl
   
   const timestamp = Date.now(); 
    data.timestamp = timestamp;

    database.count(user, function (err, usercount) {
      console.log("usercount:" + usercount);
     SZ= SZ+ usercount;

     if(SZ <= 6){
      SZ= SZ+ usercount; 
         
   } else {
      SZ=0;
      RZ = RZ +1; 
   }

   let newuser= {RZ,SZ};
  
    const newEntry={
      user: newuser,
      date:data.timestamp,
      text:data.text1,
      email:data.email
      
      
    }
   console.log(newEntry);
   
   database.insert(newEntry);
});
   res.sendFile( __dirname + '/public/index.html');
  }); 

  app.post('/draw', function(req, res) {

 const timestamp = Date.now(); 
 const newData= {
 
//user: count,
//date: timestamp,
 drawing: req.body
 }
 
 //const newData = Object.assign({"user": newuser},{"date": timestamp}, {"drawing": req.body})

 // add in our data object to our database using .insert()
 database.insert(newData, (err, docs) =>{
   if(err){
       return err;
   }
   res.json(docs);
});
  });
/*
  app.get("/export/all", (req, res) => {
   database.find({}).sort({'created':1}).exec(function (err, docs) {
       if(err){
           return err;
       } 
       docs.forEach(item => {
           const outImage = item.image.replace(/^data:image\/png;base64,/, '');
           fs.writeFileSync(path.resolve(__dirname, `./exports/all/${item.created}.png`) , outImage, 'base64');
           console.log('writing ', `${item.created}.png`)
       })
       res.send('done!')
   });
})

  app.use((req, res) => {
   res.sendFile( __dirname + '/public/404.html');

  });


  //app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)); */