let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("btn clicked")
})

// or

inputBtn.addEventListener("click", print)
function print(){
    console.log("printed")
}

// "Let" can define mulitple times
let user = "admin"
user = "user alone"
user = "changed"
console.log(user)

// "const" can define only once times
const player = "john"
const array = ["apple","orange",]
array.push("mango")
console.log(array)



