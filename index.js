let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let myLeads = ["apple","orange"]
let con = document.getElementById("container")

// inputBtn.addEventListener("click", function(){
//     console.log("btn clicked")
// })

const fromLocal = JSON.parse(localStorage.getItem("myLeads"))
console.log(fromLocal)


inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)

localStorage.setItem("myLeads", JSON.stringify(myLeads))

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

// const local = localStorage.getItem("myName")

// localStorage.setItem ("myName", ["wow","apple",123]);
// localStorage.setItem("user",123)
// localStorage.setItem("product","iphone")

// localStorage.removeItem("user")

// // localStorage.clear()


// console.log(local);
// // console.log(typeof local)


// // const btnText = "click me"
// // con.innerHTML += "<button id='butn' >"+btnText+"</button>"


// // document.getElementById("butn").addEventListener("click", function(){
// //     con.innerHTML += "<img style='display:block' src='./icon.png' >"
// // })


// let fruits = `["apple","orange"]`
// fruits = JSON.parse(fruits)
// fruits.push("cake")

// localStorage.setItem("fruitsArr", JSON.stringify(fruits))

// const fromLocal = JSON.parse(localStorage.getItem("fruitsArr"))
// console.log(fromLocal)



























