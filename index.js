// JAVASCRIPT CODE ARE HERE FOR PAGE INTERACTION

const likeOne = document.getElementById("heart-el")
const likeTwo = document.getElementById("heart2-el")
const likeThree = document.getElementById("heart3-el")
let like = document.getElementById("like-el")
let Num = 0
let likeValue = like.innerText
console.log(likeValue)

likeOne.addEventListener("click", function(){
    likeOne.src = "/images/heart.png"
    Num = Num + 1
    let add = likeValue + Num
    like.textContent = add
})

likeTwo.addEventListener("click", function() {
    likeTwo.src = "/images/heart.png"    
})

likeThree.addEventListener("click", function(){
    likeThree.src = "/images/heart.png"

})