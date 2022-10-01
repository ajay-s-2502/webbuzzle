const gamelogo = document.getElementById("logo")
const startGame = document.getElementById("menus")
const play = document.getElementById("menu1")
const about = document.getElementById("menu2")
const credit = document.getElementById("menu3")

//പ്രപഞ്ചത്തിൽ നമ്മൾ തനിച്ചാണോ!?

play.addEventListener("click",plays)
about.addEventListener("click",abouts)
credit.addEventListener("click",credits)
function plays(){
    window.location.href="Level1/Level1.html";
}
function abouts(){
    startGame.classList.add("hide") 
    gamelogo.classList.add("hide")
    document.getElementById("game-info").classList.remove("hide")
    
}
function credits(){
    startGame.classList.add("hide")
    gamelogo.classList.add("hide")
    document.getElementById("about-us").classList.remove("hide")
}
function back()
{
    document.getElementById("about-us").classList.add("hide")
    startGame.classList.remove("hide")
    gamelogo.classList.remove("hide")
    document.getElementById("game-info").classList.add("hide")
    startGame.classList.remove("hide")
    gamelogo.classList.remove("hide")
    document.getElementById("real-game").classList.add("hide")
    startGame.classList.remove("hide")
    gamelogo.classList.remove("hide")
    document.getElementById("logo").classList.add("hide")
    startGame.classList.remove("hide")
    gamelogo.classList.remove("hide")
}