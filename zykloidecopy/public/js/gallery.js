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
if(!data[1]){

    console.log()
    const main = document.getElementById("main")
    //zug1
    const textaa = document.createElement('p')
    const imgab =document.createElement('img')
    const textac = document.createElement('p')
    const imgad =document.createElement('img')
    const textae = document.createElement('p')
    const imgaf =document.createElement('img')
    
    textaa.textContent = `${data.zug1[0].text}`;
    imgab.src = data.zug1[1].img;
    textac.textContent = `${data.zug1[2].text}`;
    imgad.src = data.zug1[3].img;
    textae.textContent = `${data.zug1[4].text}`;
    imgaf.src = data.zug1[5].img;
    //zug2
    const textba = document.createElement('p')
    const imgbb =document.createElement('img')
    const textbc = document.createElement('p')
    const imgbd =document.createElement('img')
    const textbe = document.createElement('p')
    const imgbf =document.createElement('img')
    
    textba.textContent = `${data.zug2[0].text}`;
    imgbb.src = data.zug2[1].img;
    textbc.textContent = `${data.zug2[2].text}`;
    imgbd.src = data.zug2[3].img;
    textbe.textContent = `${data.zug2[4].text}`;
    imgbf.src = data.zug2[5].img;
    //zug3
    const textca = document.createElement('p')
    const imgcb =document.createElement('img')
    const textcc = document.createElement('p')
    const imgcd =document.createElement('img')
    const textce = document.createElement('p')
    const imgcf =document.createElement('img')
    
    textca.textContent = `${data.zug3[0].text}`;
    imgcb.src = data.zug3[1].img;
    textcc.textContent = `${data.zug2[2].text}`;
    imgcd.src = data.zug3[3].img;
    textce.textContent = `${data.zug3[4].text}`;
    imgcf.src = data.zug3[5].img;
    //zug4
    const textda = document.createElement('p')
    const imgdb =document.createElement('img')
    const textdc = document.createElement('p')
    const imgdd =document.createElement('img')
    const textde = document.createElement('p')
    const imgdf =document.createElement('img')
    
    textda.textContent = `${data.zug4[0].text}`;
    imgdb.src = data.zug4[1].img;
    textdc.textContent = `${data.zug4[2].text}`;
    imgdd.src = data.zug4[3].img;
    textde.textContent = `${data.zug4[4].text}`;
    imgdf.src = data.zug4[5].img;
    //zug5
    const textea = document.createElement('p')
    const imgeb =document.createElement('img')
    const textec = document.createElement('p')
    const imged =document.createElement('img')
    const textee = document.createElement('p')
    const imgef =document.createElement('img')
    
    textea.textContent = `${data.zug5[0].text}`;
    imgeb.src = data.zug5[1].img;
    textec.textContent = `${data.zug5[2].text}`;
    imged.src = data.zug5[3].img;
    textee.textContent = `${data.zug5[4].text}`;
    imgef.src = data.zug5[5].img;
    //zug3
    const textfa = document.createElement('p')
    const imgfb =document.createElement('img')
    const textfc = document.createElement('p')
    const imgfd =document.createElement('img')
    const textfe = document.createElement('p')
    const imgff =document.createElement('img')
    
    textfa.textContent = `${data.zug6[0].text}`;
    imgfb.src = data.zug6[1].img;
    textfc.textContent = `${data.zug6[2].text}`;
    imgfd.src = data.zug6[3].img;
    textfe.textContent = `${data.zug6[4].text}`;
    imgff.src = data.zug6[5].img;
    
    
    
    //row.append(text1,img1,text2,img2,text3,img3)
    main.append(textaa,imgab,textac,imgad,textae,imgaf,
               textba,imgbb,textbc,imgbd,textbe,imgbf,
               textca,imgcb,textcc,imgcd,textce,imgcf,
               textda,imgdb,textdc,imgdd,textde,imgdf,
               textea,imgeb,textec,imged,textee,imgef,
               textfa,imgfb,textfc,imgfd,textfe,imgff,)

}
else{
for(item of data){
        console.log(item)
const main = document.getElementById("main")
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
           textfa,imgfb,textfc,imgfd,textfe,imgff,)
}
}


}