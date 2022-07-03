async function handleSubmit(){

const params = new URLSearchParams(window.location.search)
const sessionId = params.get('session')
const playerId = params.get('player')
const index = params.get('index')
const zug = params.get('zug')
console.log(sessionId)
console.log(playerId)
console.log(index)
console.log(zug)

const text = document.getElementById('text2').value;

const options = {
    method: 'POST',
   /*  headers: {
      "Content-Type": "application/json",
  },
  body:text */

}

fetch(`/write?session=${sessionId}&player=${playerId}&index=${index}&zug=${zug}&text=${text}`, options).then(result => {
    //console.log(result);
      console.log('success')
  }).catch((error) => {
    console.warn(error);
  });
}