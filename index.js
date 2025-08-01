let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let delBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")
let myLeads = []
let con = document.getElementById("container")


// inputBtn.addEventListener("click", function(){
//     console.log("btn clicked")
// })

let leadfromLocal = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadfromLocal)

if (leadfromLocal){
   myLeads = leadfromLocal
   renderLeads()
}else{
   ulEl.textContent = "No data to show, Add something in input and click save input button"
}


inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)

localStorage.setItem("myLeads", JSON.stringify(myLeads))

inputEl.value = ""
renderLeads();
});


function renderLeads(){


let listItems = "";
for (let i = 0; i < myLeads.length; i++){
   listItems += `<li><a target="_blank" href ="${myLeads[i]}">${myLeads[i]}</a></li>`

}
ulEl.innerHTML = listItems;

}

delBtn.addEventListener("click", function(){
   localStorage.clear();
   myLeads = []
   renderLeads()

   if (myLeads.length <=0 && leadfromLocal === null){
      ulEl.textContent = "No data to show, Add something in input and click save input butto"
   }


})