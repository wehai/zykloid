import express from 'express'
import bodyParser from 'body-parser';
import Datastore from '@seald-io/nedb';
import fs from 'fs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { randomUUID } from 'crypto';
import nodemailer from 'nodemailer'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;
const dsubmissionId = randomUUID;

app.use(express.static('public'));
app.use(express.json({limit: '5mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb',extended: true}));
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const sessionsdb = new Datastore({filename:'db/sessionsdb.db'});
const playersdb = new Datastore({filename:'db/playersdb.db'});
const submissionsdb = new Datastore({filename:'db/submissionsdb.db'});
try {
   await sessionsdb.loadDatabaseAsync();
   await playersdb.loadDatabaseAsync();
   await submissionsdb.loadDatabaseAsync();
 } catch (error) {
   // loading has failed
 }

 let transporter = nodemailer.createTransport({
   service:'Gmail',
   auth: {
     user: 'lissyy64@gmail.com',
     pass: 'qxm'
   }
}
);


try {
   const count = await sessionsdb.countAsync({user})
   console.log(count);
 } catch (error) {
   // if an error happens
 }

/*  let currentsession
try{
currentsession = await sessionsdb.findOneAsync({}).sort({createdAt: -1}).limit(1) 
}catch (error){ console.warn(error) }
console.log("csessionId:" + currentsession._id)
  */


app.get('/', function(req, res){
   res.sendFile( __dirname + '/public/index.html');
});

app.get('/signUp', function(req, res){
   res.sendFile( __dirname + '/public/signUp.html');
});

app.get('/draw', async function(req, res){
   
   const playerId = req.query.player
   console.log(playerId)
   const sessionId = req.query.session
   console.log(sessionId)

   const submissions= {
      
      submission:{},
      player_id:  playerId,
      session_id: sessionId
   }
  /*  try{  
     await submissionsdb.insertAsync(submissions)
      } catch (error){
        console.warn(error) 
      } */

   //res.json(submissions);   
 //const drawpath = readFileSync(new URL('public/draw.html', import.meta.url));
 res.sendFile( __dirname + '/public/draw.html');
 
});
app.get('/gallery', function(req, res){
   res.sendFile( __dirname + '/public/gallery.html');
});

   const count = await playersdb.countAsync({})
   console.log("count:"+count);



app.post('/signUp', async function(req, res) {
   let insertedPlayer
   let insertedSubmission
   let insertedSession
   let usercount


   usercount = await playersdb.countAsync({})
      console.log("usercount:" + usercount);


      const session = {
         Zug:{Nr:1,
         submissions:[]}
      }

   if(Number.isInteger(usercount/6)){
      console.log("6 players signed Up");
      try{
         insertedSession = await sessionsdb.insertAsync(session)
           }  catch (error){
            console.warn(error)
           }
           console.log("sessionId:" + insertedSession._id)
      }
     
   const data = req.body;
      const players = {
         email: data.email,
         today: new Date(),
         active: false
      }

    try{
    insertedPlayer = await playersdb.insertAsync(players)
    }catch (error){
      console.warn(error)
    }    
console.log("playerId:" + insertedPlayer._id)
      
let currentsession
try{
currentsession = await sessionsdb.findOneAsync({}).sort({createdAt: -1}).limit(1) 
}catch (error){ console.warn(error) }
console.log("csessionId:" + currentsession._id)
/* let lastsession
lastsession = await sessionsdb.findOneAsync({}).sort({createdAt: -1}).skip(1).limit(1) 
console.log("lsessionId:" + lastsession._id) */
  
         const submissions = {

            submission: {text: data.text1},
            player_id: insertedPlayer._id,
            session_id: currentsession._id
   
         }
       try{  
       insertedSubmission = await submissionsdb.insertAsync(submissions)
       } catch (error){
         console.warn(error) 
       }
      console.log("submissionId:" +insertedSubmission._id)
         
 try{
  await sessionsdb.updateAsync({ _id: currentsession._id },{ $push: {'Zug.submissions': insertedSubmission._id}}, {})

} catch(error){
   console.warn(error) 
}

res.sendFile( __dirname + '/public/index.html');

//http://localhost:3000/addSubmission?playerId=${insertedPlayer._id}&text=beispiel
const nextsubURL= `http://localhost:3000/draw?session=${currentsession._id}&player=${insertedPlayer._id}`
console.log(nextsubURL)

let message = {
   to: 'jelisaflorentina@gmail.com',
   subject: "Zykloide, 1st round",
    html:
      `<p>Hello to myself. new text: <b> ${data.text1} </b></p>` +
      `<p>answere here: ${nextsubURL}</p>`,
};

let info = await transporter.sendMail(message);

console.log('Message sent successfully!');
console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
transporter.close();

})



app.post('/draw',async function(req, res) {
   let currentsubmission
   try{
   currentsubmission = await submissionsdb.findOne({}).sort({createdAt: -1}).limit(1) 
   }catch (error){ console.warn(error) }

const drawing= {drawing: req.body}
   const submissions= {
      submission: drawing,
     

   }
   try{
      await submissionsdb.updateAsync({ _id: currentsubmission._id },{ $push: {submissions:drawing}}, {})
    
    } catch(error){
       console.warn(error) 
    }

     //res.json(docs);
   // console.log(req.body)
    

    });

  app.use((req, res) => {
   res.sendFile( __dirname + '/public/404.html');

  });

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

