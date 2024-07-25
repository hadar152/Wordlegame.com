let toGuess = "כדור"
let InputElement = document.getElementById("wordId")
let bord = document.getElementById("bord")
totalgues = document.getElementById("totalgues")  // השטלתות על התגית
amountgues = 0;
L = new Audio("lozer.wav")
function guess(){
let Letterone=InputElement.value.charAt(0)
let Letterto=InputElement.value.charAt(1)
let Lettertree=InputElement.value.charAt(2)
let Letterfoure=InputElement.value.charAt(3)
bord.innerHTML+=`
<div class="letter" style="background-color: ${check(Letterone,0)};">${Letterone}</div>

<div class="letter" style="background-color: ${check(Letterto,1)};">${Letterto}</div>

<div class="letter" style="background-color: ${check(Lettertree,2)};">${Lettertree}</div>

<div class="letter" style="background-color: ${check(Letterfoure,3)};">${Letterfoure}</div>
`
}
function add(){ 
amountgues++
totalgues.innerHTML =  " מספר הניחושים" + amountgues 
if(amountgues == "4"){
L.play()
totalgues.innerHTML =  " נגמרו לך הניחושים " + amountgues
return check = false;
}
if(InputElement.value == toGuess){
alert("כל הכבוד! נגמר")
totalgues.innerHTML = " המספר הסופי של הניחושים " + amountgues
alert("המילה שצריך לנחש תיתחלף על ידי המפתחים בעוד כמה זמן ועד אז לא תוכל לנחש עוד מילים")
return check = false;
}
}
function check(letter,index){
    if(InputElement.value == ""){
    alert("לא כתבתה משפט!")
    check.remove()
    }
    if(InputElement.value.length != 4){
    alert("את/ה יכול לנחש רק מילה שהיא בת 4 תווים!")
    check.remove()
    }
    if(toGuess.charAt(index)==letter){
    return "#489c4b"
    }
    if(toGuess.includes(letter)){
     return "yellow"
    }
     return "red"
}
