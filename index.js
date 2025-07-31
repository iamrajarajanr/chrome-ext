let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myLeads = ["apple","orange"]

// inputBtn.addEventListener("click", function(){
//     console.log("btn clicked")
// })




inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
console.log(myLeads)
ulEl.textContent += myLeads[i]+" ";
})

for (let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i]);

}


