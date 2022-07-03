post();
async function post(){


    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session')

    let Url
    if(!sessionId){
        Url = "/content"
    }else{
        Url = `/content?session=${sessionId}`
    }
    
  
const response = await fetch(`${Url}`)

const data = await response.json();
console.log(data)
if(Array.isArray(data) === false){
   
    console.log("object")
    const main = document.getElementById("main")
    const link = document.getElementById("link")
        const ul = document.createElement('ul')
        const zug1 = document.createElement('li')
        const zug2 = document.createElement('li')
        const zug3 = document.createElement('li')
        const zug4 = document.createElement('li')
        const zug5 = document.createElement('li')
        const zug6 = document.createElement('li')
        const all= document.createElement('p')
             all.textContent = "show all "
        link.append(all)
            //zug1
        
        const textaa = document.createElement('p')
        const imgab =document.createElement('img')
        const textac = document.createElement('p')
        const imgad =document.createElement('img')
        const textae = document.createElement('p')
        const imgaf =document.createElement('img')
 
        textaa.textContent = `${data.doneSessionsdb.zug1[0].text}`;
        imgab.src = data.doneSessionsdb.zug1[1].img;
        textac.textContent = `${data.doneSessionsdb.zug1[2].text}`;
        imgad.src = data.doneSessionsdb.zug1[3].img;
        textae.textContent = `${data.doneSessionsdb.zug1[4].text}`;
        imgaf.src = data.doneSessionsdb.zug1[5].img;
        //zug2
        const textba = document.createElement('p')
        const imgbb =document.createElement('img')
        const textbc = document.createElement('p')
        const imgbd =document.createElement('img')
        const textbe = document.createElement('p')
        const imgbf =document.createElement('img')
        
        textba.textContent = `${data.doneSessionsdb.zug2[0].text}`;
        imgbb.src = data.doneSessionsdb.zug2[1].img;
        textbc.textContent = `${data.doneSessionsdb.zug2[2].text}`;
        imgbd.src = data.doneSessionsdb.zug2[3].img;
        textbe.textContent = `${data.doneSessionsdb.zug2[4].text}`;
        imgbf.src = data.doneSessionsdb.zug2[5].img;
        //zug3
        const textca = document.createElement('p')
        const imgcb =document.createElement('img')
        const textcc = document.createElement('p')
        const imgcd =document.createElement('img')
        const textce = document.createElement('p')
        const imgcf =document.createElement('img')
        
        textca.textContent = `${data.doneSessionsdb.zug3[0].text}`;
        imgcb.src = data.doneSessionsdb.zug3[1].img;
        textcc.textContent = `${data.doneSessionsdb.zug2[2].text}`;
        imgcd.src = data.doneSessionsdb.zug3[3].img;
        textce.textContent = `${data.doneSessionsdb.zug3[4].text}`;
        imgcf.src = data.doneSessionsdb.zug3[5].img;
        //zug4
        const textda = document.createElement('p')
        const imgdb =document.createElement('img')
        const textdc = document.createElement('p')
        const imgdd =document.createElement('img')
        const textde = document.createElement('p')
        const imgdf =document.createElement('img')
        
        textda.textContent = `${data.doneSessionsdb.zug4[0].text}`;
        imgdb.src = data.doneSessionsdb.zug4[1].img;
        textdc.textContent = `${data.doneSessionsdb.zug4[2].text}`;
        imgdd.src = data.doneSessionsdb.zug4[3].img;
        textde.textContent = `${data.doneSessionsdb.zug4[4].text}`;
        imgdf.src = data.doneSessionsdb.zug4[5].img;
        //zug5
        const textea = document.createElement('p')
        const imgeb =document.createElement('img')
        const textec = document.createElement('p')
        const imged =document.createElement('img')
        const textee = document.createElement('p')
        const imgef =document.createElement('img')
        
        textea.textContent = `${data.doneSessionsdb.zug5[0].text}`;
        imgeb.src = data.doneSessionsdb.zug5[1].img;
        textec.textContent = `${data.doneSessionsdb.zug5[2].text}`;
        imged.src = data.doneSessionsdb.zug5[3].img;
        textee.textContent = `${data.doneSessionsdb.zug5[4].text}`;
        imgef.src = data.doneSessionsdb.zug5[5].img;
        //zug3
        const textfa = document.createElement('p')
        const imgfb =document.createElement('img')
        const textfc = document.createElement('p')
        const imgfd =document.createElement('img')
        const textfe = document.createElement('p')
        const imgff =document.createElement('img')
        
        textfa.textContent = `${data.doneSessionsdb.zug6[0].text}`;
        imgfb.src = data.doneSessionsdb.zug6[1].img;
        textfc.textContent = `${data.doneSessionsdb.zug6[2].text}`;
        imgfd.src = data.doneSessionsdb.zug6[3].img;
        textfe.textContent = `${data.doneSessionsdb.zug6[4].text}`;
        imgff.src = data.doneSessionsdb.zug6[5].img;

        
zug1.append(textaa,imgab,textac,imgad,textae,imgaf)
zug2.append(textba,imgbb,textbc,imgbd,textbe,imgbf)
zug3.append(textca,imgcb,textcc,imgcd,textce,imgcf)
zug4.append(textda,imgdb,textdc,imgdd,textde,imgdf)
zug5.append(textea,imgeb,textec,imged,textee,imgef)
zug6.append(textfa,imgfb,textfc,imgfd,textfe,imgff)
ul.append(zug1,zug2,zug3,zug4,zug5,zug6)
main.append(ul)
        
}

if(Array.isArray(data) === true){
if(!data[1]){
    console.log("22")
    const main = document.getElementById("main")
    const link = document.getElementById("link")
        const ul = document.createElement('ul')
        const zug1 = document.createElement('li')
        const zug2 = document.createElement('li')
        const zug3 = document.createElement('li')
        const zug4 = document.createElement('li')
        const zug5 = document.createElement('li')
        const zug6 = document.createElement('li')
        const all= document.createElement('p')
             all.textContent = "show all "
        link.append(all)
            //zug1
        
        const textaa = document.createElement('p')
        const imgab =document.createElement('img')
        const textac = document.createElement('p')
        const imgad =document.createElement('img')
        const textae = document.createElement('p')
        const imgaf =document.createElement('img')
 
        textaa.textContent = `${data[0].doneSessionsdb.zug1[0].text}`;
        imgab.src = data[0].doneSessionsdb.zug1[1].img;
        textac.textContent = `${data[0].doneSessionsdb.zug1[2].text}`;
        imgad.src = data[0].doneSessionsdb.zug1[3].img;
        textae.textContent = `${data[0].doneSessionsdb.zug1[4].text}`;
        imgaf.src = data[0].doneSessionsdb.zug1[5].img;
        //zug2
        const textba = document.createElement('p')
        const imgbb =document.createElement('img')
        const textbc = document.createElement('p')
        const imgbd =document.createElement('img')
        const textbe = document.createElement('p')
        const imgbf =document.createElement('img')
        
        textba.textContent = `${data[0].doneSessionsdb.zug2[0].text}`;
        imgbb.src = data[0].doneSessionsdb.zug2[1].img;
        textbc.textContent = `${data[0].doneSessionsdb.zug2[2].text}`;
        imgbd.src = data[0].doneSessionsdb.zug2[3].img;
        textbe.textContent = `${data[0].doneSessionsdb.zug2[4].text}`;
        imgbf.src = data[0].doneSessionsdb.zug2[5].img;
        //zug3
        const textca = document.createElement('p')
        const imgcb =document.createElement('img')
        const textcc = document.createElement('p')
        const imgcd =document.createElement('img')
        const textce = document.createElement('p')
        const imgcf =document.createElement('img')
        
        textca.textContent = `${data[0].doneSessionsdb.zug3[0].text}`;
        imgcb.src = data[0].doneSessionsdb.zug3[1].img;
        textcc.textContent = `${data[0].doneSessionsdb.zug2[2].text}`;
        imgcd.src = data[0].doneSessionsdb.zug3[3].img;
        textce.textContent = `${data[0].doneSessionsdb.zug3[4].text}`;
        imgcf.src = data[0].doneSessionsdb.zug3[5].img;
        //zug4
        const textda = document.createElement('p')
        const imgdb =document.createElement('img')
        const textdc = document.createElement('p')
        const imgdd =document.createElement('img')
        const textde = document.createElement('p')
        const imgdf =document.createElement('img')
        
        textda.textContent = `${data[0].doneSessionsdb.zug4[0].text}`;
        imgdb.src = data[0].doneSessionsdb.zug4[1].img;
        textdc.textContent = `${data[0].doneSessionsdb.zug4[2].text}`;
        imgdd.src = data[0].doneSessionsdb.zug4[3].img;
        textde.textContent = `${data[0].doneSessionsdb.zug4[4].text}`;
        imgdf.src = data[0].doneSessionsdb.zug4[5].img;
        //zug5
        const textea = document.createElement('p')
        const imgeb =document.createElement('img')
        const textec = document.createElement('p')
        const imged =document.createElement('img')
        const textee = document.createElement('p')
        const imgef =document.createElement('img')
        
        textea.textContent = `${data[0].doneSessionsdb.zug5[0].text}`;
        imgeb.src = data[0].doneSessionsdb.zug5[1].img;
        textec.textContent = `${data[0].doneSessionsdb.zug5[2].text}`;
        imged.src = data[0].doneSessionsdb.zug5[3].img;
        textee.textContent = `${data[0].doneSessionsdb.zug5[4].text}`;
        imgef.src = data[0].doneSessionsdb.zug5[5].img;
        //zug3
        const textfa = document.createElement('p')
        const imgfb =document.createElement('img')
        const textfc = document.createElement('p')
        const imgfd =document.createElement('img')
        const textfe = document.createElement('p')
        const imgff =document.createElement('img')
        
        textfa.textContent = `${data[0].doneSessionsdb.zug6[0].text}`;
        imgfb.src = data[0].doneSessionsdb.zug6[1].img;
        textfc.textContent = `${data[0].doneSessionsdb.zug6[2].text}`;
        imgfd.src = data[0].doneSessionsdb.zug6[3].img;
        textfe.textContent = `${data[0].doneSessionsdb.zug6[4].text}`;
        imgff.src = data[0].doneSessionsdb.zug6[5].img;

        
zug1.append(textaa,imgab,textac,imgad,textae,imgaf)
zug2.append(textba,imgbb,textbc,imgbd,textbe,imgbf)
zug3.append(textca,imgcb,textcc,imgcd,textce,imgcf)
zug4.append(textda,imgdb,textdc,imgdd,textde,imgdf)
zug5.append(textea,imgeb,textec,imged,textee,imgef)
zug6.append(textfa,imgfb,textfc,imgfd,textfe,imgff)
ul.append(zug1,zug2,zug3,zug4,zug5,zug6)
main.append(ul)
}     

else{
for(item of data){
    console.log("137")
        console.log(item)

        const main = document.getElementById("main")
        const ul = document.createElement('ul')
        const zug1 = document.createElement('li')
        const zug2 = document.createElement('li')
        const zug3 = document.createElement('li')
        const zug4 = document.createElement('li')
        const zug5 = document.createElement('li')
        const zug6 = document.createElement('li')
        //zug1
        
        const textaa = document.createElement('p')
        const imgab =document.createElement('img')
        const textac = document.createElement('p')
        const imgad =document.createElement('img')
        const textae = document.createElement('p')
        const imgaf =document.createElement('img')
        textaa.textContent = `${item.doneSessionsdb.zug1[0].text}`;
        imgab.src = item.doneSessionsdb.zug1[1].img;
        textac.textContent = `${item.doneSessionsdb.zug1[2].text}`;
        imgad.src = item.doneSessionsdb.zug1[3].img;
        textae.textContent = `${item.doneSessionsdb.zug1[4].text}`;
        imgaf.src = item.doneSessionsdb.zug1[5].img;
        //zug2
        const textba = document.createElement('p')
        const imgbb =document.createElement('img')
        const textbc = document.createElement('p')
        const imgbd =document.createElement('img')
        const textbe = document.createElement('p')
        const imgbf =document.createElement('img')
        
        textba.textContent = `${item.doneSessionsdb.zug2[0].text}`;
        imgbb.src = item.doneSessionsdb.zug2[1].img;
        textbc.textContent = `${item.doneSessionsdb.zug2[2].text}`;
        imgbd.src = item.doneSessionsdb.zug2[3].img;
        textbe.textContent = `${item.doneSessionsdb.zug2[4].text}`;
        imgbf.src = item.doneSessionsdb.zug2[5].img;
        //zug3
        const textca = document.createElement('p')
        const imgcb =document.createElement('img')
        const textcc = document.createElement('p')
        const imgcd =document.createElement('img')
        const textce = document.createElement('p')
        const imgcf =document.createElement('img')
        
        textca.textContent = `${item.doneSessionsdb.zug3[0].text}`;
        imgcb.src = item.doneSessionsdb.zug3[1].img;
        textcc.textContent = `${item.doneSessionsdb.zug2[2].text}`;
        imgcd.src = item.doneSessionsdb.zug3[3].img;
        textce.textContent = `${item.doneSessionsdb.zug3[4].text}`;
        imgcf.src = item.doneSessionsdb.zug3[5].img;
        //zug4
        const textda = document.createElement('p')
        const imgdb =document.createElement('img')
        const textdc = document.createElement('p')
        const imgdd =document.createElement('img')
        const textde = document.createElement('p')
        const imgdf =document.createElement('img')
        
        textda.textContent = `${item.doneSessionsdb.zug4[0].text}`;
        imgdb.src = item.doneSessionsdb.zug4[1].img;
        textdc.textContent = `${item.doneSessionsdb.zug4[2].text}`;
        imgdd.src = item.doneSessionsdb.zug4[3].img;
        textde.textContent = `${item.doneSessionsdb.zug4[4].text}`;
        imgdf.src = item.doneSessionsdb.zug4[5].img;
        //zug5
        const textea = document.createElement('p')
        const imgeb =document.createElement('img')
        const textec = document.createElement('p')
        const imged =document.createElement('img')
        const textee = document.createElement('p')
        const imgef =document.createElement('img')
        
        textea.textContent = `${item.doneSessionsdb.zug5[0].text}`;
        imgeb.src = item.doneSessionsdb.zug5[1].img;
        textec.textContent = `${item.doneSessionsdb.zug5[2].text}`;
        imged.src = item.doneSessionsdb.zug5[3].img;
        textee.textContent = `${item.doneSessionsdb.zug5[4].text}`;
        imgef.src = item.doneSessionsdb.zug5[5].img;
        //zug3
        const textfa = document.createElement('p')
        const imgfb =document.createElement('img')
        const textfc = document.createElement('p')
        const imgfd =document.createElement('img')
        const textfe = document.createElement('p')
        const imgff =document.createElement('img')
        
        textfa.textContent = `${item.doneSessionsdb.zug6[0].text}`;
        imgfb.src = item.doneSessionsdb.zug6[1].img;
        textfc.textContent = `${item.doneSessionsdb.zug6[2].text}`;
        imgfd.src = item.doneSessionsdb.zug6[3].img;
        textfe.textContent = `${item.doneSessionsdb.zug6[4].text}`;
        imgff.src = item.doneSessionsdb.zug6[5].img;

        
zug1.append(textaa,imgab,textac,imgad,textae,imgaf)
zug2.append(textba,imgbb,textbc,imgbd,textbe,imgbf)
zug3.append(textca,imgcb,textcc,imgcd,textce,imgcf)
zug4.append(textda,imgdb,textdc,imgdd,textde,imgdf)
zug5.append(textea,imgeb,textec,imged,textee,imgef)
zug6.append(textfa,imgfb,textfc,imgfd,textfe,imgff)
ul.append(zug1,zug2,zug3,zug4,zug5,zug6)
main.append(ul)
}
/* const main = document.getElementById("main")
//zug1
const textaa = document.createElement('p')
const imgab =document.createElement('img')
const textac = document.createElement('p')
const imgad =document.createElement('img')
const textae = document.createElement('p')
const imgaf =document.createElement('img')

textaa.textContent = `${item.zug1[0].text}`;
imgab.src = item.zug1[1].img;
textac.textContent = `${item.zug1[2].text}`;
imgad.src = item.zug1[3].img;
textae.textContent = `${item.zug1[4].text}`;
imgaf.src = item.zug1[5].img;
//zug2
const textba = document.createElement('p')
const imgbb =document.createElement('img')
const textbc = document.createElement('p')
const imgbd =document.createElement('img')
const textbe = document.createElement('p')
const imgbf =document.createElement('img')

textba.textContent = `${item.zug2[0].text}`;
imgbb.src = item.zug2[1].img;
textbc.textContent = `${item.zug2[2].text}`;
imgbd.src = item.zug2[3].img;
textbe.textContent = `${item.zug2[4].text}`;
imgbf.src = item.zug2[5].img;
//zug3
const textca = document.createElement('p')
const imgcb =document.createElement('img')
const textcc = document.createElement('p')
const imgcd =document.createElement('img')
const textce = document.createElement('p')
const imgcf =document.createElement('img')

textca.textContent = `${item.zug3[0].text}`;
imgcb.src = item.zug3[1].img;
textcc.textContent = `${item.zug2[2].text}`;
imgcd.src = item.zug3[3].img;
textce.textContent = `${item.zug3[4].text}`;
imgcf.src = item.zug3[5].img;
//zug4
const textda = document.createElement('p')
const imgdb =document.createElement('img')
const textdc = document.createElement('p')
const imgdd =document.createElement('img')
const textde = document.createElement('p')
const imgdf =document.createElement('img')

textda.textContent = `${item.zug4[0].text}`;
imgdb.src = item.zug4[1].img;
textdc.textContent = `${item.zug4[2].text}`;
imgdd.src = item.zug4[3].img;
textde.textContent = `${item.zug4[4].text}`;
imgdf.src = item.zug4[5].img;
//zug5
const textea = document.createElement('p')
const imgeb =document.createElement('img')
const textec = document.createElement('p')
const imged =document.createElement('img')
const textee = document.createElement('p')
const imgef =document.createElement('img')

textea.textContent = `${item.zug5[0].text}`;
imgeb.src = item.zug5[1].img;
textec.textContent = `${item.zug5[2].text}`;
imged.src = item.zug5[3].img;
textee.textContent = `${item.zug5[4].text}`;
imgef.src = item.zug5[5].img;
//zug3
const textfa = document.createElement('p')
const imgfb =document.createElement('img')
const textfc = document.createElement('p')
const imgfd =document.createElement('img')
const textfe = document.createElement('p')
const imgff =document.createElement('img')

textfa.textContent = `${item.zug6[0].text}`;
imgfb.src = item.zug6[1].img;
textfc.textContent = `${item.zug6[2].text}`;
imgfd.src = item.zug6[3].img;
textfe.textContent = `${item.zug6[4].text}`;
imgff.src = item.zug6[5].img;
 


//row.append(text1,img1,text2,img2,text3,img3)
main.append(textaa,imgab,textac,imgad,textae,imgaf,
           textba,imgbb,textbc,imgbd,textbe,imgbf,
           textca,imgcb,textcc,imgcd,textce,imgcf,
           textda,imgdb,textdc,imgdd,textde,imgdf,
           textea,imgeb,textec,imged,textee,imgef,
           textfa,imgfb,textfc,imgfd,textfe,imgff,)*/
}
}


}