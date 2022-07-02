

sessions = [
    {   _id: "4234234234234",
        submission_ids: [
            "erfijsoreifdorf",
            "erfijsoreifdorf",
            "erfijsoreifdorf"
        ]
    }
]

submissions = [
    {
        _id: "erfijsoreifdorf",
        player_id: "9834ur9384ur9834ur",
        session_id: "s4e5ure45etu",
        submission:
            {
                text: "..."
            },
    }
]

players = [
    {
        _id: "9834ur9384ur9834ur",
        email: "a+x@gmail.com"
    },
    {
        _id: "9834ur9384ur9834ur",
        email: "a+y@gmail.com",
    }
]


const myURL="/draw?session" + session._id + "&player" + player._id

const sessionId = req.params[0]

// neDB verwenden, um session zu finden
session.find(session => session._id === sessionId)
/* 
Holger Heißmeyer sagt:count % 6 === 0 

objekt.attribut 
Holger Heißmeyer sagt:objekt["zuh"+n] 
Holger Heißmeyer sagt:n=1 
Holger Heißmeyer sagt:objekt.zug1 
Holger Heißmeyer sagt:objekt["zug"+n].submissions[0] 
Holger Heißmeyer sagt:objekt["zug"+n].submissions[1] 
Holger Heißmeyer sagt:n=0...5 
Holger Heißmeyer sagt:
https://zykloid.see.kh-berlin.de/
 
Holger Heißmeyer sagt:
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository
 
Holger Heißmeyer sagt:
https://www.datenschutz-grundverordnung.eu/grundverordnung/art-5-ds-gvo/

{"zug1":{"submissions":["Df73l2dvcphyignB","EAn3aKvQNqBz8h9B","U813OMtARPC0dMFw","dO6sSxBFyX8Iu3k6","PzBgiJb1O9JImOl1","r4i7PzXsZpl2HWut"],"full":"true","send":"false"},"zug2":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug3":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug4":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug5":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug6":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"done":"false","_id":"7QAtE6mjFuOMbLEv"}
{"zug1":{"submissions":["0tLiEPbUiMirVJHB","LEZ6Iw7a9pTLu42U","pUFRVF21GaaNEl6g","K23ENnjFbcETxGMx"],"full":"false","send":"false"},"zug2":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug3":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug4":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug5":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug6":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"done":"false","_id":"R0oyE4ee61xb8NfJ"}
{"zug1":{"submissions":["qX9QxvLcyhuwjpNP","wZsxvL8czvOdsHi7","i3143ywLbnYYM1WJ","sAT22gvMq7Qne3hd","ZnPCQNCxTXg6VHzX","pWOsPV1JDwIQAFYa"],"full":"true","send":"false"},"zug2":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug3":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug4":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug5":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug6":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"done":"false","_id":"sxjyj3IqW2jxBYFj"}


{"email":"lissyy64@googlemail.com","today":{"$$date":1656602737352},"active":false,"_id":"AQPub8jEHZXltv87"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602750143},"active":false,"_id":"IKr7wGioCmKbuBoh"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602771344},"active":false,"_id":"M0mZh4pTUC1Oh0KW"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602766052},"active":false,"_id":"V6QtHcNLrn8o7HzG"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602734622},"active":false,"_id":"WhBT3CC5AitcFkvU"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602747640},"active":false,"_id":"Xq3Pn5vd81AWQHE7"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602755110},"active":false,"_id":"ixVuCnRf5kiqR29g"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602752696},"active":false,"_id":"k1GFL0CpB6sMkGKi"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602728753},"active":false,"_id":"pKCCnYpZu59wUH1v"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602742425},"active":false,"_id":"qT9OFSLPa4VkeGUG"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602732278},"active":false,"_id":"uGzaWrnpr1AAELRn"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602739639},"active":false,"_id":"wLoW2kIvETMFFvni"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602760541},"active":false,"_id":"wgHlgeBczrRm9XSO"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602763320},"active":false,"_id":"xGLxKPA9MLh9VJmW"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602757627},"active":false,"_id":"xRPIb1En20MRLR84"}
{"email":"lissyy64@googlemail.com","today":{"$$date":1656602745498},"active":false,"_id":"xi3O7dTxDmQIIk3g"}


{"submission":{"text":"wde"},"player_id":"wgHlgeBczrRm9XSO","session_id":"R0oyE4ee61xb8NfJ","_id":"0tLiEPbUiMirVJHB"}
{"submission":{"text":"wde"},"player_id":"xi3O7dTxDmQIIk3g","session_id":"7QAtE6mjFuOMbLEv","_id":"Df73l2dvcphyignB"}
{"submission":{"text":"wde"},"player_id":"Xq3Pn5vd81AWQHE7","session_id":"7QAtE6mjFuOMbLEv","_id":"EAn3aKvQNqBz8h9B"}
{"submission":{"text":"wde"},"player_id":"M0mZh4pTUC1Oh0KW","session_id":"R0oyE4ee61xb8NfJ","_id":"K23ENnjFbcETxGMx"}
{"submission":{"text":"wde"},"player_id":"xGLxKPA9MLh9VJmW","session_id":"R0oyE4ee61xb8NfJ","_id":"LEZ6Iw7a9pTLu42U"}
{"submission":{"text":"wde"},"player_id":"ixVuCnRf5kiqR29g","session_id":"7QAtE6mjFuOMbLEv","_id":"PzBgiJb1O9JImOl1"}
{"submission":{"text":"wde"},"player_id":"IKr7wGioCmKbuBoh","session_id":"7QAtE6mjFuOMbLEv","_id":"U813OMtARPC0dMFw"}
{"submission":{"text":"wde"},"player_id":"wLoW2kIvETMFFvni","session_id":"sxjyj3IqW2jxBYFj","_id":"ZnPCQNCxTXg6VHzX"}
{"submission":{"text":"wde"},"player_id":"k1GFL0CpB6sMkGKi","session_id":"7QAtE6mjFuOMbLEv","_id":"dO6sSxBFyX8Iu3k6"}
{"submission":{"text":"wde"},"player_id":"WhBT3CC5AitcFkvU","session_id":"sxjyj3IqW2jxBYFj","_id":"i3143ywLbnYYM1WJ"}
{"submission":{"text":"wde"},"player_id":"V6QtHcNLrn8o7HzG","session_id":"R0oyE4ee61xb8NfJ","_id":"pUFRVF21GaaNEl6g"}
{"submission":{"text":"wde"},"player_id":"qT9OFSLPa4VkeGUG","session_id":"sxjyj3IqW2jxBYFj","_id":"pWOsPV1JDwIQAFYa"}
{"submission":{"text":"wde"},"player_id":"pKCCnYpZu59wUH1v","session_id":"sxjyj3IqW2jxBYFj","_id":"qX9QxvLcyhuwjpNP"}
{"submission":{"text":"wde"},"player_id":"xRPIb1En20MRLR84","session_id":"7QAtE6mjFuOMbLEv","_id":"r4i7PzXsZpl2HWut"}
{"submission":{"text":"wde"},"player_id":"AQPub8jEHZXltv87","session_id":"sxjyj3IqW2jxBYFj","_id":"sAT22gvMq7Qne3hd"}
{"submission":{"text":"wde"},"player_id":"uGzaWrnpr1AAELRn","session_id":"sxjyj3IqW2jxBYFj","_id":"wZsxvL8czvOdsHi7"}

{"zug1":{"submissions":["uycGaobaOGoOQiXK","RYa9c1CUbT8dNZd4","JyTQUkTg6JefjupK","uusTb7yBA4F5abg4","HAUNd3HaewEZj7Ja","041ESW1M83qptXJS"],"full":"true","send":"true"},"zug2":{"submissions":["hN3sVSarvCuKoFgs","rdZhQVdGsUAtzGbx","nCSZRshqgaC1NXbJ","IbzBtO4p3dRPdDiz","EBooMS2sr6BKZD6k","dgRclGOLEbTq6uLg"],"full":"true","send":"false"},"zug3":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug4":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug5":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"zug6":{"submissions":[0,1,2,3,4,5],"full":"false","send":"false"},"done":"false","_id":"5vlBhZdukbbL8618"}
 

let scont;
let simg;
    abfolgen.forEach(async function(element,index,array) {
      i+1
      const zug = "zug"+i
     await gallerydb.updateAsync({_id: content._id},{$set: {zug: "" }})
     element.forEach(async function(element,index,array) {
      const sub= await submissionsdb.findOneAsync({_id: element})
      if(sub.submission.text){
         const ctext = sub.submission.text
         scont = {text: ctext}
         console.log("i:"+ctext)}
      if(sub.submission.base64img){ 
      const cimg =sub.submission.base64img 
      scont = {img: cimg}}

      await gallerydb.updateAsync({_id: content._id},{$push: {zug: scont }})
       })
  
   })
   const updatedContent = await gallerydb.findOneAsync({})
   res.json(updatedContent)
    });
*/
