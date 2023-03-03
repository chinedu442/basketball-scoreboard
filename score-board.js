let homescore = 0
let guestscore = 0;
let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function homeAdd1(){
 homescore++
 homeEl.textContent = homescore
}

function homeAdd2(){
 homescore += 2
 homeEl.textContent = homescore
}

function homeAdd3(){
 homescore += 3
 homeEl.textContent = homescore
}

//homeEl.textContent = homescore
//console.log(guestscore)

function guestAdd1(){
 guestscore++
 guestEl.textContent = guestscore
}

function guestAdd2(){
 guestscore += 2
 guestEl.textContent = guestscore
}

function guestAdd3(){
 guestscore += 3
 guestEl.textContent = guestscore
}
console.log(guestscore)

/*if(homescore > guestscore){
  //document.getElementById("leader").textContent = "Home Leads"
  console.log("Home Leads")
} 
else if(guestscore > homescore){
  //document.getElementById("leader").textContent = "Guest Leads"
  console.log("Guest Leads")
}
else{
 //document.getElementById("leader").textContent = ""
 console.log("")
}*/



function newGame(){
 //console.log("clicked")
 homescore *= 0
 guestscore *= 0
 document.getElementById("home-score").textContent = homescore 
 document.getElementById("guest-score").textContent = guestscore 
}

