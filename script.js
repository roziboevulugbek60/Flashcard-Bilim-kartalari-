const flashcard = document.getElementById("flashcard");

const question =
document.getElementById("question");

const answer =
document.getElementById("answer");


const nextBtn =
document.getElementById("next");

const prevBtn =
document.getElementById("prev");


const knowBtn =
document.getElementById("know");


const dontKnowBtn =
document.getElementById("dontKnow");


const progressText =
document.getElementById("progressText");


const barFill =
document.getElementById("barFill");



const addCardBtn =
document.getElementById("addCard");


const newQuestion =
document.getElementById("newQuestion");


const newAnswer =
document.getElementById("newAnswer");


const themeBtn =
document.getElementById("themeBtn");





let cards = JSON.parse(
localStorage.getItem("flashcards")
) || [


{
question:"HTML nima?",
answer:"Web sahifa tuzish tili"
},


{
question:"CSS nima?",
answer:"Web sahifa dizayni uchun ishlatiladi"
},


{
question:"JavaScript nima?",
answer:"Web dasturlash tili"
},


{
question:"Python nima?",
answer:"Universal dasturlash tili"
}


];




let current = 0;


let score = 0;







// KARTANI KO'RSATISH


function showCard(){


flashcard.classList.remove("flip");



question.innerText =
cards[current].question;



answer.innerText =
cards[current].answer;



progressText.innerText =
`${current+1} / ${cards.length}`;



let percent =
((current+1)/cards.length)*100;



barFill.style.width =
percent+"%";



}









// FLIP


flashcard.onclick=()=>{


flashcard.classList.toggle(
"flip"
);


};









// NEXT


nextBtn.onclick=()=>{


if(current < cards.length-1){

current++;

}

else{

current=0;

}



showCard();


};









// PREVIOUS


prevBtn.onclick=()=>{


if(current>0){

current--;

}

else{

current=cards.length-1;

}



showCard();


};








// BILAMAN


knowBtn.onclick=()=>{


score++;


nextBtn.click();


};








// BILMAYMAN


dontKnowBtn.onclick=()=>{


nextBtn.click();


};









// YANGI KARTA QO'SHISH


addCardBtn.onclick=()=>{


if(
newQuestion.value.trim()==="" ||
newAnswer.value.trim()===""
){

alert("Savol va javob yozing");

return;

}



cards.push({

question:newQuestion.value,

answer:newAnswer.value

});



saveCards();



newQuestion.value="";

newAnswer.value="";



alert("Karta qo'shildi");



showCard();


};









// SAQLASH


function saveCards(){


localStorage.setItem(

"flashcards",

JSON.stringify(cards)

);


}









// DARK MODE


themeBtn.onclick=()=>{


document.body.classList.toggle(
"dark"
);



localStorage.setItem(

"flashTheme",

document.body.classList.contains(
"dark"
)

?
"dark"
:
"light"

);


};






if(
localStorage.getItem("flashTheme")
==="dark"
){

document.body.classList.add(
"dark"
);

}








// START


showCard();