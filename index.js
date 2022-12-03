// JAVASCRIPT CODE ARE HERE FOR PAGE INTERACTION

const likeOne = document.getElementById("heart-el")
const likeTwo = document.getElementById("heart2-el")
const likeThree = document.getElementById("heart3-el")
let like = document.getElementById("like-el")
let Num = 0
Num = Num + 1
let likeValue = parseInt(like.innerText)
let aDd = likeValue + Num
console.log(typeof likeValue)

likeOne.addEventListener("click", function(){
    if (likeOne.src == "/images/icon-heart.png" ){
        // likeOne.src = "/images/heart.png"
        // like.textContent = aDd
        console.log("yes")
    } else {
        // likeOne.src = "/images/icon-heart.png"
        console.log("no")
    }
})

likeTwo.addEventListener("click", function() {
    likeTwo.src = "/images/heart.png"    
})

likeThree.addEventListener("click", function(){
    likeThree.src = "/images/heart.png"

})

console.log(likeOne.src= "/images/icon-heart.png")