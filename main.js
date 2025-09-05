//document.getElementById("count-el").innerText=5

//let count = 5
//count = count+1
//console.log(count)

//function increase(){
//console.log('the button was clicked')
//}
/*let count1 = 10
let count2=20

function increase(){
    let totallab= count1+count2
    console.log(totallab)
    document.getElementById("count-el").innerText=totallab
}

increase()
increase()
increase()*/
/*let increase=0

function countdown(){
    increase= increase + 1
}
countdown()
countdown()
countdown()

console.log(increase)*/
let count = 0
function increase() {
    count += 1
    document.getElementById("count-el").innerText = count
}

/*function save(){
    console.log(count)
}

/*let username = "daniel ambrose"
let message = "you have  new notifications"
 console.log(username+' '+message  )*/

function save() {
    val = count
    seperator=" - "
    display = val + seperator
    document.getElementById('previous').textContent += display
        count =0
    document.getElementById("count-el").innerText = count
}


