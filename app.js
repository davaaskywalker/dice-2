// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;


// Тоглогчийн цуцлуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// Тоглогчийн ээлжийн оноог цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо аль нүдээр буусаныг хадгалах хувьсагч

var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').textContent = dice;

console.log("Шоо :" + dice);


// Программ эхлэхэд бэлдэнэ
document.querySelector(".dice").style.display = "none";
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;


window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;


