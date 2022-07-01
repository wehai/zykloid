import express from 'express'
import bodyParser from 'body-parser';
import Datastore from '@seald-io/nedb';
import fs from 'fs';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer'
import { Console } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json({limit: '5mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb',extended: true}));
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const sessionsdb = new Datastore({filename:'db/sessionsdb.db'});
const playersdb = new Datastore({filename:'db/playersdb.db'});
const submissionsdb = new Datastore({filename:'db/submissionsdb.db'});
const gallerydb = new Datastore({filename:'gallerydb.db'});
try {
   await sessionsdb.loadDatabaseAsync();
   await playersdb.loadDatabaseAsync();
   await submissionsdb.loadDatabaseAsync();
   await gallerydb.loadDatabaseAsync();
 } catch (error) {
   // loading has failed
 }

 let transporter = nodemailer.createTransport({
   service:'Gmail',
   auth: {
     user: 'zykloide.game@gmail.com',
     pass: 'volyfmsemnhwpixk'
   }
}
)


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
 
 res.sendFile( __dirname + '/public/draw.html');
 
});
app.get('/write', async function(req, res){
 
   res.sendFile( __dirname + '/public/write.html');
   
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
   const data = req.body;
//user zählen
   usercount = await playersdb.countAsync({})
      console.log("usercount:" + usercount);


      const session = {
         zug1:{
            submissions:[],
            full:"false",
            send:"false"
         },
         zug2:{
            submissions:[0,1,2,3,4,5],
            full:"false",
            send:"false"
            },
         zug3:{
            submissions:[0,1,2,3,4,5],
            full:"false",
            send:"false"
         },  
         zug4:{
            submissions:[0,1,2,3,4,5],
            full:"false",
            send:"false"
         }, 
         zug5:{
            submissions:[0,1,2,3,4,5],
            full:"false",
            send:"false"
         }, 
         zug6:{
            submissions:[0,1,2,3,4,5],
            full:"false",
            send:"false"
         },    
      done: "false"
      }
// wenn noch keine oder 6*x user gibt 
//new session
   if(Number.isInteger(usercount/6)){
      console.log("6 players signed Up");
      try{
         insertedSession = await sessionsdb.insertAsync(session)
           }  catch (error){
            console.warn(error)
           }
           console.log("sessionId:" + insertedSession._id)

}


//  new player
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
 
//offene session finden
let currentsession
try{
currentsession = await sessionsdb.findOneAsync({ 'zug1.full':"false"})
}catch (error){ console.warn(error) }
console.log("csessionId:" + currentsession._id)

  
//new submission
         const submissions = {

            submission: {text: data.text1},
            player_id: insertedPlayer._id,
            session_id: currentsession._id,
            //URLforNextSession: nextsubURL
   
         }
       try{  
       insertedSubmission = await submissionsdb.insertAsync(submissions)
       } catch (error){
         console.warn(error) 
       }
      console.log("submissionId:" +insertedSubmission._id)
 //id der submission in session zug1        
 try{
  await sessionsdb.updateAsync({ _id: currentsession._id },{ $push: {'zug1.submissions': insertedSubmission._id}}, {})

} catch(error){
   console.warn(error) 
}
 // letzte (volle) session full= true
 let fullsession
 try{
        fullsession = await sessionsdb.findOneAsync({$and: [{ 'zug1.submissions':{$size: 6} },{ 'zug1.send':"false" }]})
      }catch(error){}
     if(!fullsession){}
     else{   
 try{
         await sessionsdb.updateAsync({ _id: fullsession._id },{ $set: { 'zug1.full': "true" } }, { multi: true })
       
 } catch(error){
          console.warn(error) 
       }
      }


res.sendFile( __dirname + '/public/index.html');



//bestätigungsmail
let message = {
   to: data.email,
   subject: "Welcome to Zykloide",
    html:
      `<p>Hey you,</p>` +
      `<p>Thanks for your first submission.</p>` +
      `<p>With this: </p>`+
      `<p><b>${data.text1}</b>,</p>`+
      `<p> i bet the next player will have fun, trying to draw it</p>` +
      `<p>Cheers,</p>`+
      `<p><a href="http://localhost:3000/"> Zykloide </a></p>`,
      //email to contact if u want to report
      
};

//let info = await transporter.sendMail(message);

console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
transporter.close();

})
app.post('/write', async function(req,res){
 
   const playerId = req.query.player
   console.log("p:" +playerId)
const currentsessionId = req.query.session
   console.log("p:"+currentsessionId)
const index = req.query.index
   console.log("p:"+index)
const zug = req.query.zug
   console.log("p:"+zug)
   const text = req.query.text
   console.log("p:"+text)
   

//new submission
const submissions = {

   submission: {text: text},
   player_id: playerId,
   session_id: currentsessionId,
}

let insertedSubmission
try{  
insertedSubmission = await submissionsdb.insertAsync(submissions)
} catch (error){
console.warn(error) 
}


   if(zug == 3){  
      if(index== 0)
      { try{ 
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.0': insertedSubmission._id}}, {})
       } catch(error){
          console.warn(error) 
       }}
       if(index== 1)
      { try{
          await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.1': insertedSubmission._id}}, {})
       } catch(error){
          console.warn(error) 
       }}
       if(index== 2)
      { try{
        await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.2': insertedSubmission._id}}, {})
       } catch(error){
          console.warn(error) 
       }}
       if(index== 3)
      { try{
        await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.3': insertedSubmission._id}}, {})
       } catch(error){
          console.warn(error) 
       }}
       if(index== 4)
      { try{
       await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.4': insertedSubmission._id}}, {})
      } catch(error){
          console.warn(error) 
       }}
       if(index== 5)
      { try{
        await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug3.submissions.5': insertedSubmission._id}}, {})
       } catch(error){
          console.warn(error) 
       }}}
      
       //zug4
       if(zug == 5){  
         if(index== 0)
         { try{
         
            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.0': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}
          if(index== 1)
         { try{
           
            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.1': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}
          if(index== 2)
         { try{
           
            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.2': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}
          if(index== 3)
         { try{
          
            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.3': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}
          if(index== 4)
         { try{

            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.4': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}
          if(index== 5)
         { try{
            
            await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug5.submissions.5': insertedSubmission._id}}, {})
          
          } catch(error){
             console.warn(error) 
          }}}

})


app.post('/draw',async function(req, res) {
   let insertedSubmission;
// getting the ids of the player and session
const playerId = req.query.player
   console.log("p:" +playerId)
const currentsessionId = req.query.session
   console.log("p:"+currentsessionId)
const index = req.query.index
   console.log("p:"+index)
const zug = req.query.zug
   console.log("p:"+zug)


const drawing= req.body

const submissions= {
      
   submission:drawing,
   player_id:  playerId,
   session_id: currentsessionId
}

    try{  
    insertedSubmission = await submissionsdb.insertAsync(submissions)
      } catch (error){
        console.warn(error) 
      } 


 //id der submission in session zug2  
 if(zug == 2){  
if(index== 0)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.0': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}
 if(index== 1)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.1': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}
 if(index== 2)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.2': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}
 if(index== 3)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.3': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}
 if(index== 4)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.4': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}
 if(index== 5)
{ try{
   //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
   await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions.5': insertedSubmission._id}}, {})
 
 } catch(error){
    console.warn(error) 
 }}}

 //zug4
 if(zug == 4){  
   if(index== 0)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.0': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}
    if(index== 1)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.1': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}
    if(index== 2)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.2': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}
    if(index== 3)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.3': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}
    if(index== 4)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.4': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}
    if(index== 5)
   { try{
      //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
      await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug4.submissions.5': insertedSubmission._id}}, {})
    
    } catch(error){
       console.warn(error) 
    }}}

    //zug6
    if(zug == 6){  
      if(index== 0)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.0': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}
       if(index== 1)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.1': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}
       if(index== 2)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.2': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}
       if(index== 3)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.3': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}
       if(index== 4)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.4': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}
       if(index== 5)
      { try{
         //await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug2.submissions': insertedSubmission._id}}, {})
         await sessionsdb.updateAsync({ _id: currentsessionId},{ $set: {'zug6.submissions.5': insertedSubmission._id}}, {})
       
       } catch(error){
          console.warn(error) 
       }}}

       let fullsession
       try{
              fullsession = await sessionsdb.findOneAsync({ 'submissions':{ $size: 6 } })/* .sort({createdAt: -1}).limit(1)  */
            }catch(error){}
           if(!fullsession){}
           else{   
       try{
               await sessionsdb.updateAsync({ _id: fullsession._id },{ $set: { 'full': "true" } }, { multi: true })
             
       } catch(error){
                console.warn(error) 
             }
            }
   
    });

  app.use((req, res) => {
   res.sendFile( __dirname + '/public/404.html');

  });

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));











//SPIELLOGIK  

  async function gamelogic(){
     console.log("interval started")
   let currentsession
   let fullsessionzug2 
   let fullsessionzug3 
   let fullsessionzug4 
   let fullsessionzug5 
   let fullsessionzug6

// full sessions = true   
 try{  
   fullsessionzug2 = await sessionsdb.findOneAsync({ $and: [{'zug2.submissions.0':{$ne: 0}},{'zug2.submissions.1':{$ne: 1}},{'zug2.submissions.2':{$ne: 2}},{'zug2.submissions.3':{$ne: 3}},{'zug2.submissions.4':{$ne: 4}},{'zug2.submissions.5':{$ne: 5}},{ 'zug2.send':"false" }] })
}catch(error){}
if(!fullsessionzug2){}
else{   
try{
    await sessionsdb.updateAsync({ _id: fullsessionzug2._id },{ $set: { 'zug2.full': "true" } }, { multi: true})
  
} catch(error){
     console.warn(error) 
  }
 }
 try{  
   fullsessionzug3 = await sessionsdb.findOneAsync({ $and: [{'zug3.submissions.0':{$ne: 0}},{'zug3.submissions.1':{$ne: 1}},{'zug3.submissions.2':{$ne: 2}},{'zug3.submissions.3':{$ne: 3}},{'zug3.submissions.4':{$ne: 4}},{'zug3.submissions.5':{$ne: 5}},{ 'zug3.send':"false" }] })
}catch(error){}
if(!fullsessionzug3){}
else{   
try{
    await sessionsdb.updateAsync({ _id: fullsessionzug3._id },{ $set: { 'zug3.full': "true" } }, { multi: true})
  
} catch(error){
     console.warn(error) 
  }
 }
 try{  
   fullsessionzug4 = await sessionsdb.findOneAsync({ $and: [{'zug4.submissions.0':{$ne: 0}},{'zug4.submissions.1':{$ne: 1}},{'zug4.submissions.2':{$ne: 2}},{'zug4.submissions.3':{$ne: 3}},{'zug4.submissions.4':{$ne: 4}},{'zug4.submissions.5':{$ne: 5}},{ 'zug4.send':"false" }] })
}catch(error){}
if(!fullsessionzug4){}
else{   
try{
    await sessionsdb.updateAsync({ _id: fullsessionzug4._id },{ $set: { 'zug4.full': "true" } }, { multi: true})
  
} catch(error){
     console.warn(error) 
  }
 }
 try{  
   fullsessionzug5 = await sessionsdb.findOneAsync({ $and: [{'zug5.submissions.0':{$ne: 0}},{'zug5.submissions.1':{$ne: 1}},{'zug5.submissions.2':{$ne: 2}},{'zug5.submissions.3':{$ne: 3}},{'zug5.submissions.4':{$ne: 4}},{'zug5.submissions.5':{$ne: 5}},{ 'zug5.send':"false" }] })
}catch(error){}
if(!fullsessionzug5){}
else{   
try{
    await sessionsdb.updateAsync({ _id: fullsessionzug5._id },{ $set: { 'zug5.full': "true" } }, { multi: true})
  
} catch(error){
     console.warn(error) 
  }
 }
 try{  
   fullsessionzug6 = await sessionsdb.findOneAsync({ $and: [{'zug6.submissions.0':{$ne: 0}},{'zug6.submissions.1':{$ne: 1}},{'zug6.submissions.2':{$ne: 2}},{'zug6.submissions.3':{$ne: 3}},{'zug6.submissions.4':{$ne: 4}},{'zug6.submissions.5':{$ne: 5}},{ 'zug6.send':"false" }] })
}catch(error){}
if(!fullsessionzug6){}
else{   
try{
    await sessionsdb.updateAsync({ _id: fullsessionzug6._id },{ $set: { 'zug6.full': "true" } }, { multi: true})
  
} catch(error){
     console.warn(error) 
  }
 }

//volle züge1 in sessions finden
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug1.full':"true" }, { 'zug1.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug1.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})
   csubcontent = csub.submission.text

console.log(csubcontent)
//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu draw generieren, mit session id und player id, evtl next playerid, aber gefärdung der daten?
const nextsubURL= `http://localhost:3000/draw?session=${currentsession._id}&player=${nextplayerId}&index=${index}&zug=2`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, 1st round",
    html:
    `<p>Hello you,</p>` + 
    `<p>new text to react to:.</p>` +
    `<p> <b> ${csubcontent} </b></p>`+
    `<p>Looking forward to your next move</p>`+
    `<p>Click <b><a href="${nextsubURL}">here </a></b>to do so</p>`+
    `<p>Cheers,</p>`+
    `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
    `<p></p>`+
    `<p></p>`+
    `<p>if you feel the need to report the received submission by the other player, forward this Mail to: zykloide.game@gmail.com . Thanks you in advance!</p>`,
  
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug1.send': "true" } }, { multi: true })

} catch(error){
 console.warn(error) 
}
     })
  })
}

//zug2
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug2.full':"true" }, { 'zug2.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug2.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})
   csubcontent = csub.submission.base64img
   console.log(csubcontent)
const base64Data =  csubcontent.replace(/^data:image\/png;base64,/,"");
console.log("bd:"+base64Data)
     const imgattachment =
 {   filename: 'drawing.png',
     content: Buffer.from(
        base64Data,
        'base64'
    ),} 

//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu draw generieren, mit session id und player id, evtl next playerid, aber gefärdung der daten?
const nextsubURL= `http://localhost:3000/write?session=${currentsession._id}&player=${nextplayerId}&index=${index}&zug=3`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, 2nd round",
    html:
      `<p>Hello you,</p>` + 
      `<p>new drawing to react to is attached.</p>` +
      `<p>Looking forward to your next move</p>`+
      `<p>Click <b><a href="${nextsubURL}">here </a></b>to do so</p>`+
      `<p>Cheers,</p>`+
      `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
      `<p></p>`+
      `<p></p>`+
      `<p>if you feel the need to report the received submission by the other player, forward this Mail to: zykloide.game@gmail.com . Thanks you in advance!</p>`,
       attachments: [
        { filename: 'drawing.png',
         content: Buffer.from(
            base64Data,
            'base64'
        )}
   ] 
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug2.send': "true" } }, { multi: true })

} catch(error){
 console.warn(error) 
}
     })
  })
}

//zug3
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug3.full':"true" }, { 'zug3.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug3.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})
csubcontent = csub.submission.text

console.log(csubcontent)
//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu draw generieren, mit session id und player id, evtl next playerid, aber gefärdung der daten?
const nextsubURL= `http://localhost:3000/draw?session=${currentsession._id}&player=${nextplayerId}&index=${index}&zug=4`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, 3th round",
    html:
    `<p>Hello you,</p>` + 
    `<p>new text to react to:.</p>` +
    `<p> <b> ${csubcontent} </b></p>`+
    `<p>Looking forward to your next move</p>`+
    `<p>Click <b><a href="${nextsubURL}">here </a></b>to do so</p>`+
    `<p>Cheers,</p>`+
    `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
    `<p></p>`+
    `<p></p>`+
    `<p>if you feel the need to report the received submission by the other player, forward this Mail to: zykloide.game@gmail.com . Thanks you in advance!</p>`,
  
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug3.send': "true" } }, { multi: true })

} catch(error){
 console.warn(error) 
}
     })
  })
}
 //zug4
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug4.full':"true" }, { 'zug4.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug4.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})
   csubcontent = csub.submission.base64img
let base64Data = csubcontent.replace(/^data:image\/png;base64,/, "");
     const imgattachment ={
     filename: 'drawing.png',
     content: Buffer.from(
        base64Data,
        'base64'
    ),} 
console.log(csubcontent)
//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu draw generieren, mit session id und player id, evtl next playerid, aber gefärdung der daten?
const nextsubURL= `http://localhost:3000/write?session=${currentsession._id}&player=${nextplayerId}&index=${index}&zug=5`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, 4th round",
    html:
    `<p>Hello you,</p>` + 
    `<p>new drawing to react to is attached.</p>` +
    `<p>Looking forward to your next move</p>`+
    `<p>Click <b><a href="${nextsubURL}">here </a></b>to do so</p>`+
    `<p>Cheers,</p>`+
    `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
    `<p></p>`+
    `<p></p>`+
    `<p>if you feel the need to report the received submission by the other player, forward this Mail to: zykloide.game@gmail.com . Thanks you in advance!</p>`,
    attachments: [
            imgattachment,
   ] 
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug4.send': "true" } }, { multi: true })

} catch(error){
 console.warn(error) 
}
     })
  })
}
  
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug5.full':"true" }, { 'zug5.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug5.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})

   csubcontent = csub.submission.text

console.log(csubcontent)
//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu draw generieren, mit session id und player id, evtl next playerid, aber gefärdung der daten?
const nextsubURL= `http://localhost:3000/draw?session=${currentsession._id}&player=${nextplayerId}&index=${index}&zug=6`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, 5th round",
    html:
    `<p>Hello you,</p>` + 
    `<p>new text to react to:.</p>` +
    `<p> <b> ${csubcontent} </b></p>`+
    `<p>Looking forward to your next move</p>`+
    `<p>Click <b><a href="${nextsubURL}">here </a></b>to do so</p>`+
    `<p>Cheers,</p>`+
    `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
    `<p></p>`+
    `<p></p>`+
    `<p>if you feel the need to report the received submission by the other player, forward this Mail to: zykloide.game@gmail.com . Thanks you in advance!</p>`,
  
   
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug5.send': "true" } }, { multi: true })

} catch(error){
 console.warn(error) 
}
     })
  })
}
 
try{
   currentsession = await sessionsdb.findAsync({$and: [{ 'zug6.full':"true" }, { 'zug6.send':"false" }]}) 
   }catch (error){ console.warn(error) }
   console.log("csession:" + currentsession)
if(!currentsession){}else{
  
   currentsession.forEach(async function(element){
    const currentsession= element
    console.log("csessionId:" + currentsession._id)
      //submissions der session, als ids
   const subids = currentsession.zug6.submissions
   //console.log(subids)

//das id array durchgehen, zu jeder:
subids.forEach(async function(element,index,array) {
   //zu jeder id die nächste in der reiheabfragen
   let nextsub = array[index+1]
   if (nextsub == undefined){
      nextsub = array[index*0]
  } 
console.log("ele: "+element+" ns:"+nextsub)

//den content zu den ids finden
let csubcontent
const csub = await submissionsdb.findOneAsync({_id: element})
   csubcontent = csub.submission.base64img
let base64Data = csubcontent.replace(/^data:image\/png;base64,/, "");
     const imgattachment ={
     filename: 'drawing.png',
     content: Buffer.from(
        base64Data,
        'base64'
    ),} 
console.log(csubcontent)
//die id des next player in der sub db finden
const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

//email des next players finden
const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

// Url zu gallery, evtl zu link mit genau der Runde
const nextsubURL= `http://localhost:3000/gallery?session=${currentsession._id}&player=${nextplayerId}&index=${index}`
console.log(nextsubURL)
// email schicken
let message = {
   to: nextplayerEmail,
   subject: "Zykloide, finished!",
    html:
    `<p>Hello you,</p>` + 
      `<p>The game you partizipated in is finished!!</p>` +
      `<p>Your initial Text resulted in the image attached</p>`+
      `<p>Click <b><a href="${nextsubURL}">here </a></b>to see how it came to this final drawing and all the other submissions</p>`+
      `<p>Thank you for taking part in this.</p>`+
      `<p>Cheers,</p>`+
      `<p><a href="http://localhost:3000/"> Zykloide </a></p>`+
   
      `<p></p>`,
     
      attachments: [
            imgattachment,
   ] 
};
await transporter.sendMail(message)


console.log('Message sent successfully!');
//console.log(nodemailer.getTestMessageUrl(info));

// only needed when using pooled connections
//transporter.close(); 
try{
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'zug6.send': "true" } }, { multi: true })
await sessionsdb.updateAsync({ _id:  currentsession._id },{ $set: { 'done': "true" } }, { multi: true })
await gallerydb.insertAsync({currentsession})
} catch(error){
 console.warn(error) 
}
     })
  })
}  
  };

let interval =6000; //10 min=600000
let intervalID= setInterval(gamelogic, interval)
