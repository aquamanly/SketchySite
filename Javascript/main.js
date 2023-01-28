var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalphabet = "";

function createShift(n){
    // shift by n amount
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        //console.log(i, i + n, offset);
      //  console.log(`offset: ${offset}`);
       
        newalphabet+= alphabet[offset];
    }
}


function encode(b){
createShift(3);
let message = b.valls.value;
let result = "";
message = message.toLowerCase();
 for (let i = 0; i < message.length; i++){
    let index = alphabet.indexOf(message[i]);

    if (index > -1)
        result += newalphabet[index];
    else
        result += ' ';
}
if(result != "euxwxv"){
    alert("you are wrong... that doesn't fit the memory")
} else {
    window.open("https://www.youtube.com/shorts/WPlvMkDuZzM")
}
return false;
//document.getElementById('cipher').innerHTML = result;
//return result;
}

