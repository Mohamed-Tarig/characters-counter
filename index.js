const teaxareaEl = document.getElementById("textarea")

const totalcounterEl = document.getElementById("total-counter")
const remainingcounterEl = document.getElementById("remaining-counter")

teaxareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})
updateCounter()
function updateCounter(){
    totalcounterEl.innerText = teaxareaEl.value.length;
    remainingcounterEl.innerText = teaxareaEl.getAttribute("maxlength") - totalcounterEl.innerText;
}