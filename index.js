let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myLeads = ["apple","orange"]
let con = document.getElementById("container")

// inputBtn.addEventListener("click", function(){
//     console.log("btn clicked")
// })




inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
inputEl.value = " "
renderLeads();
});

function renderLeads(){
let listItems = "";
for (let i = 0; i < myLeads.length; i++){
   listItems += `<li><a target="_blank" href ="${myLeads[i]}">${myLeads[i]}</a></li>`




}
ulEl.innerHTML = listItems;

}

// const btnText = "click me"
// con.innerHTML += "<button id='butn' >"+btnText+"</button>"


// document.getElementById("butn").addEventListener("click", function(){
//     con.innerHTML += "<img style='display:block' src='./icon.png' >"
// })





































