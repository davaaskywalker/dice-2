var isGameOver; 

var activePlayer;
var scores;
var roundScore;
var diceDom=document.querySelector(".dice");

initGame();

function initGame(){

    isGameOver = false;
    // Тоглогчийн ээлжийг хадгалах хувьсагч
activePlayer = 0;

// Тоглогчийн цуцлуулсан оноог хадгалах хувьсагч
scores = [0, 0];

// Тоглогчийн ээлжийн оноог цуглуулах оноог хадгалах хувьсагч
roundScore = 0;
// Шоо аль нүдээр буусаныг хадгалах хувьсагч

// Программ эхлэхэд бэлдэнэ
document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0"
document.getElementById("current-0").textContent = "0"
document.getElementById("current-1").textContent = "0"


document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";


document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-1-panel').classList.remove("winner");

diceDom.style.display = "none";



}


// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function (){
if(isGameOver!==true){
        
    // 1-6 хүртэлх санамсаргүй тоо авах
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // буусан шоог вэб дээр гаргаж ирнэ
    diceDom.style.display = "block"
    diceDom.src = 'dice-'+ diceNumber+'.png';

    // буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн оноон дээр нэмнэ.

    if(diceNumber!==1){
        roundScore = roundScore+diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore;
    }else{
        eeljSolih();
    }
}else{alert("Тоглоом дууссан байна. New game товчийг дарж шинээр эхлэнэ үү.")}
});

// Тоглогч оноог хадгалахыг хүссэн үед тоглогчийн нийт оноон дээр нэмэх



document.querySelector('.btn-hold').addEventListener("click", function(){
if(isGameOver!==true){
    scores[activePlayer]=scores[activePlayer]+roundScore;

    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    // ээлжийн оноог 0 болгоно
    roundScore= 0;
    document.getElementById('current-' + activePlayer).textContent= "0";
// Тоглогч ялсан эсэхийг шалгана
if(scores[activePlayer] >= 100 ){
    isGameOver=true;
    document.getElementById('name-'+ activePlayer).textContent ="WINNER!!!";
    document.querySelector('.player-'+ activePlayer + "-panel").classList.add('winner');
}else{  
    // Тоглогчийн ээлжийг сольно
      eeljSolih()};
}else{alert("Тоглоом дууссан байна. New game товчийг дарж шинээр эхлэнэ үү.")}

})


function eeljSolih(){
// тоглогчийн ээлжийн оноог 0 болгоно
roundScore= 0;
document.getElementById("current-" + activePlayer).textContent = 0;

// тоглогчийн ээлжийг шилжүүлнэ
activePlayer === 0 ? (activePlayer = 1): (activePlayer = 0);


diceDom.style.display = "none";
// улаан цэгийг шилжүүлнэ
document.querySelector(".player-0-panel").classList.toggle('active');
document.querySelector(".player-1-panel").classList.toggle('active')
}



//  Тоглолтыг шинээр эхлүүлэх

document.querySelector('.btn-new').addEventListener("click", initGame);


