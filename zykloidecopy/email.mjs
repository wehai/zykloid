
//[]
'use strict';
import Datastore from '@seald-io/nedb';
import nodemailer from 'nodemailer'

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
      pass: 'qxmmsubuoqehwclc'
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
                    'iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB9KADAAQAAAABAAABkAAAAAAb3B8NAAAby0lEQVR4Ae3dv+/k6FkA8Oh0W4AACfFD6Gq+oUG3AilCuo4iDc0KEaSL0KVPQ78pLtvR8ScQaUMBEhTb0FxPiXZPCI5cR4EE12wSkSisYHnf3Hpv1mc/4/F4/P7wx5I1M37t933ezzMz74zt8XzlKyYCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQINCbwG+kDj1O8/NXc76fl5WatohnaR1L1ytloV0CBAgQILBI4F5a62maX47mvCyX7T1tEc/SOpaut7eB9ggQIECAwMUC30hbjAfz4XEu23vaIp6ldSxdb28D7REgUJnAW5XFI5x6BUru9r0LWKKyYLOriqI2o7LTRqP1TstO759un++/l+aaDkOM4+vp8R+kzvxzmocPkvl+XmYiQIBAUwL3UrQld3nX9i11i3iW1hGt998pL8MAM9yWOgzR1BP6wmB/M63/kwnrn6Zlv31hXVYnQIBAUYFoUMllt55Kf6AY92+LeJbWMbfe1GA+DOp75GRs0vPjD1PnBtvxbR7US5+g2bO9vhEgsLHAw1Tf+I1seJzL9phK7vKf6t8W8SytY2q9v0xBDTkY3+6VkymXHpc9CqwHe3tGesy8PhHoUKD0N/QOSa/uUpSTH6fafWu8mvh1BY/SvWHgjm7tGXlN5g4BArUKzO329a2kXMbmcnI64MjP9fnJzs/SfOo6d9+ekeu91UCAwA4CU7t98zJTOYEhJ/kb+dwg41vjdfmJ9oSMzVlfZ21rAgQIHF6ghnMcek1CZHs6oOe9Ie+k2c8Ie30m6BcBAgR2EIi+RfrWeF0CItv8U7bnac6DeB7M86B+Osjn+w57JAQTAQIECCwTmDuebjBZ5hettdQ2Gvh9qIqElREgQIDAGwLD8fT8jTHPznJ/g+eqB0tso13zTpa7it/GBAgQIEBgPwHf0Pez1hIBAgQI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',
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
    //fullsession = await sessionsdb.findOneAsync({ Zug: { submissions:{ $size: 6 } }})
try{
currentsession = await sessionsdb.findOneAsync({$and: [{ full:"true" }, { send:"false" }]})
}catch (error){ console.warn(error) }
console.log("csubId:" + currentsession.Zug.submissions)
console.log("csessionId:" + currentsession._id)
 
    usercount = await playersdb.countAsync({})
    console.log("usercount:" + usercount);

    if(Number.isInteger(usercount/6)){
       
        }
 //const docs = await sessionsdb.findAsync({ Zug: {submissions: [{ $gte: 1 } ]}})
 
 const subids = currentsession.Zug.submissions
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
       attachments: [
        
        {
            filename: 'image.png',
            content: Buffer.from(
                'iVBORw0KGgoAAAANSUhEUgAAAfQAAAGQCAYAAABYs5LGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB9KADAAQAAAABAAABkAAAAAAb3B8NAAAby0lEQVR4Ae3dv+/k6FkA8Oh0W4AACfFD6Gq+oUG3AilCuo4iDc0KEaSL0KVPQ78pLtvR8ScQaUMBEhTb0FxPiXZPCI5cR4EE12wSkSisYHnf3Hpv1mc/4/F4/P7wx5I1M37t933ezzMz74zt8XzlKyYCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQINCbwG+kDj1O8/NXc76fl5WatohnaR1L1ytloV0CBAgQILBI4F5a62maX47mvCyX7T1tEc/SOpaut7eB9ggQIECAwMUC30hbjAfz4XEu23vaIp6ldSxdb28D7REgUJnAW5XFI5x6BUru9r0LWKKyYLOriqI2o7LTRqP1TstO759un++/l+aaDkOM4+vp8R+kzvxzmocPkvl+XmYiQIBAUwL3UrQld3nX9i11i3iW1hGt998pL8MAM9yWOgzR1BP6wmB/M63/kwnrn6Zlv31hXVYnQIBAUYFoUMllt55Kf6AY92+LeJbWMbfe1GA+DOp75GRs0vPjD1PnBtvxbR7US5+g2bO9vhEgsLHAw1Tf+I1seJzL9phK7vKf6t8W8SytY2q9v0xBDTkY3+6VkymXHpc9CqwHe3tGesy8PhHoUKD0N/QOSa/uUpSTH6fafWu8mvh1BY/SvWHgjm7tGXlN5g4BArUKzO329a2kXMbmcnI64MjP9fnJzs/SfOo6d9+ekeu91UCAwA4CU7t98zJTOYEhJ/kb+dwg41vjdfmJ9oSMzVlfZ21rAgQIHF6ghnMcek1CZHs6oOe9Ie+k2c8Ie30m6BcBAgR2EIi+RfrWeF0CItv8U7bnac6DeB7M86B+Osjn+w57JAQTAQIECCwTmDuebjBZ5hettdQ2Gvh9qIqElREgQIDAGwLD8fT8jTHPznJ/g+eqB0tso13zTpa7it/GBAgQIEBgPwHf0Pez1hIBAgQI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',
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