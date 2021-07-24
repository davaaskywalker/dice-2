// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;


// Тоглогчийн цуцлуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// Тоглогчийн ээлжийн оноог цуглуулах оноог хадгалах хувьсагч
var roundScore = 0;
// Шоо аль нүдээр буусаныг хадгалах хувьсагч

var diceNumber = Math.floor(Math.random() * 6) + 1;



// Программ эхлэхэд бэлдэнэ
document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0"
document.getElementById("current-0").textContent = "0"
document.getElementById("current-1").textContent = "0"

var diceDom=document.querySelector(".dice");


diceDom.style.display = "none";
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function (){
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
    

});

// Тоглогч оноог хадгалахыг хүссэн үед тоглогчийн нийт оноон дээр нэмэх



