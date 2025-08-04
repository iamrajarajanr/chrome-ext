// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){
//     console.log("btn clicked")
// })

// // or

// inputBtn.addEventListener("click", print)
// function print(){
//     console.log("printed")
// }

// // "Let" can define mulitple times
// let user = "admin"
// user = "user alone"
// user = "changed"
// console.log(user)

// // "const" can define only once times
// const player = "john"
// const array = ["apple","orange",]
// array.push("mango")
// console.log(array)


// // innerHTML
// const btnText = "click me"
// con.innerHTML += "<button id='butn' >"+btnText+"</button>"

// document.getElementById("butn").addEventListener("click", function(){
//     con.innerHTML += "<img style='display:block' src='./icon.png' >"
// })


// //localStorage
// let fruits = `["apple","orange"]`
// fruits.push("cake")
// localStorage.setItem("fruitsArr", JSON.stringify(fruits))
// const fromLocal = JSON.parse(localStorage.getItem("fruitsArr"))
// console.log(fromLocal)

// // localstorage set and remove
// const local = localStorage.getItem("myName")
// localStorage.setItem ("myName", ["wow","apple",123]);
// localStorage.setItem("user",123)
// localStorage.setItem("product","iphone")
// localStorage.removeItem("user")
// localStorage.clear()

// console.log(local);
// console.log(typeof local)



// //falsy and truthy
// console.log(Boolean(undefined))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(0))
// console.log(Boolean(false))
// console.log(Boolean("false"))
// console.log(Boolean("hi"))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(["hello",123]))
// console.log(Boolean(NaN))

function sum(a,b){
   return a+b;
}


function print(message){
    console.log(`hi ${message} mike`)

}

let userData = ["John","Ben","Ram","Anita"]

function looper(userArr){
   let dataVar =""
   for(let i = 0; i < userArr.length; i++){
      dataVar += userArr[i] + "";
   }

   return dataVar
}
let userObj = {
    name: "Mike",
    age: "25",
    job:"dev",
    skill:"React",
}

function objPrint(obj){
    console.log(
        `The Empolyee name is ${obj.name} age is ${obj.age}, job is ${obj.job}. He is skilled in ${obj.skill}`
    )

}

objPrint(userObj)