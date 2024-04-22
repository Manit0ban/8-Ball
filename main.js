
document.getElementById("btn").addEventListener("click", btnClicked);


function btnClicked() {
    let rand = Math.random()
    // console.log(rand);
    inp = document.getElementById("in").value
    console.log(inp);

 if (inp == "") {
    document.getElementById("eight").src = 'img/1a.png';

} else if (inp == "Does a magic 8 ball actually work?".toLowerCase()) {
    document.getElementById("eight").src = 'img/2a.png';

} else if (inp == "Is JavaScript awesome?".toLowerCase()) {
    document.getElementById("eight").src = 'img/3a.png';

} else if (rand <= 0.2) {
    document.getElementById("eight").src = 'img/1.png';

} else if (rand <= 0.4) {
    document.getElementById("eight").src = 'img/2.png';

} else if (rand <= 0.6) {
    document.getElementById("eight").src = 'img/3.png';

} else if (rand <= 0.8) {
    document.getElementById("eight").src = 'img/4.png';

} else if (rand <= 1) {
    document.getElementById("eight").src = 'img/5.png';

} 

document.getElementById("in").value = "";




}



// 50% heads 

// 10 percent heads, 60 percent feet, 30 percent tails

// if (rand < 0.1) {
//     console.log("Heads");
// } else if (rand < 0.7) {
//     console.log("Feet");
// } else {
//     console.log("Tails");
// }