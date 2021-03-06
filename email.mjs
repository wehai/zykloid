
//[]
'use strict';
import Datastore from '@seald-io/nedb';
import nodemailer from 'nodemailer'

const sessionsdb = new Datastore({filename:'db/sessionsdb.db'})
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

async function main() {

    console.log('Credentials obtained, sending message...');

    // NB! Store the account object values somewhere if you want
    // to re-use the same account for future mail deliveries

    // Create a SMTP transporter object
    

    let message = {
        //from: 'jelisa.weber@stud.kh-berlin.de',
        // Comma separated list of recipients
        to: 'jelisaflorentina@gmail.com',

        // Subject of the message
        subject: "Zykloide, 1st round",

        // plaintext body
        text: 'halligalli',

        // HTML body
        // html:
        //     '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
        //     '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
        attachments: [
        
            {
                filename: 'image.png',
                content: Buffer.from(
                    'iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB9KADAAQAAAABAAABkAAAAAAb3B8NAAATB0lEQVR4Ae3dPY/kNBgAYFixJR8SQkI0VEuFhERJfzXNtdDzD4AC/stdQws/ghLtNQjpfgLNLQUSOtBiw46Uncu8szPjTPzxWPJd1m/i2I9H8iTxZl97TSJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQI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IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECtQp8mhr2S8q3dzlv5zKJAAECBAgQaETg3dTOP1LeTOab/3NZjkkECBAgQGARgYtFah230q9S19+c6X4uyzGJAAECBAgsImBCL8v6RlBdFAsOEyJAgAABAvsFTOj7jQ7Z4+9g5ygWHCZEgAABAgQInFvAM/RzizsfAQIECBBYSMAq94VgVUuAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAicJvAv3GYBQX8BWXgAAAAASUVORK5CYII=',
                    'base64'
                ),

            },

        
        ]
    };

   let info = await transporter.sendMail(message);

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    transporter.close();
}

/* main().catch(err => {
    console.error(err.message);
    process.exit(1);
}); */

async function send(){

    let currentsession
    let usercount
try{
currentsession = await sessionsdb.findOneAsync({}).sort({createdAt: -1}).limit(1) 
}catch (error){ console.warn(error) }
console.log("csubId:" + currentsession.Zug.submissions)
console.log("csessionId:" + currentsession._id)
 
    usercount = await playersdb.countAsync({})
    console.log("usercount:" + usercount);

    if(Number.isInteger(usercount/6)){
       
        }
 //const docs = await sessionsdb.findAsync({ Zug: {submissions: [{ $gte: 1 } ]}})
 const csession = await sessionsdb.findOneAsync({ $or: [{ full:"true" }, { send:"false" }] })  
 const subids = csession.Zug.submissions
 //console.log(subids)
 

 subids.forEach(async function(element,index,array) {
let nextsub = array[index+1]
 if (nextsub == undefined){
    nextsub = array[index*0]
} 

const csub = await submissionsdb.findOneAsync({_id: element}) 
const csubcontent = csub.submission.text
console.log(element +"ctext: " + csubcontent + " nextsub:"+nextsub)

const nextplayersub = await submissionsdb.findOneAsync({_id: nextsub})  
const nextplayerId = nextplayersub.player_id
console.log("nextplayer Id: " + nextplayerId)

const nextplayer = await playersdb.findOneAsync({_id: nextplayerId})
const nextplayerEmail = nextplayer.email
console.log("nextplayer email: " + nextplayerEmail)

const nextsubURL= `http://localhost:3000/draw?session=${csession._id}&player=${nextplayerId}`

let message = {
    to: nextplayerEmail,
    subject: "Zykloide, 1st round",
     html:
       `<p>Hello to myself. new text: <b> ${csubcontent} </b></p>` +
       `<p>answere here: ${nextsubURL}</p>`,
 };
 let info = await transporter.sendMail(message);

 console.log('Message sent successfully!');
 console.log(nodemailer.getTestMessageUrl(info));

 // only needed when using pooled connections
 transporter.close(); 
 try{
    await sessionsdb.updateAsync({ _id: csession._id },{ $set: { send: "true" } }, { multi: true })
  
} catch(error){
     console.warn(error) 
  }
 });


}
send().catch(err => {
    console.error(err.message);
    process.exit(1);
});
