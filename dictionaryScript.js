var url ="https://api.dictionaryapi.dev/api/v2/entries/en/"
const btn = document.getElementById('sebtn');
const edit = document.getElementById("edit")
const word = document.getElementById('word')



 // Storing response

async function getapi(urll) {
   
    // Storing response
    var response = await fetch(urll);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    const def = data[0].meanings[1].definitions[0].definition;
    const speech = data[0].meanings[1].partOfSpeech;
    console.log(def);
    document.getElementById('def').innerHTML = def;
    document.getElementById('speech').innerHTML = speech;


}
btn.addEventListener('click', function(){
    let inword = document.getElementById('input').value;
    console.log(inword);
    var urll =url.concat(inword);
    getapi(urll);
    word.innerHTML = inword;



})
/*

*btn.addEventListener('click', getapi(url));
 */
/* 
btn.addEventListener('click', func);
function func(){
    let input = document.getElementById('input').value;
    console.log(input);} 
 /* let a = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello').then(response => response.json).then(data => console.log(data));
 const s = a.json;
 console.log(a); */
  

