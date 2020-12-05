/*  1. Write a program to make a digital clock using Js, HTTM and CSS.  */

// Solution(see HTML page):

function getReadableTime(){
    let am_pm = 'AM'
    let date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    if(hours == 12){
        am_pm = 'PM'
    }
    else if (hours > 12){
        hours = hours - 12
        am_pm = 'PM'
    }
    else if(hours == 0){
        hours = 12
        am_pm = 'AM'
    }
    else{
        am_pm = 'AM'
    }
    // Getting time readable
    hours = (hours<10)?'0'+ hours : hours
    minutes = (minutes<10)? '0'+ minutes : minutes
    seconds = (seconds<10)? '0'+ seconds :seconds
    let time = hours+':'+minutes+':'+seconds+':'+am_pm
    document.getElementById('myClock').innerHTML= time
    setTimeout(getReadableTime, 1000)
}
getReadableTime()




/*2. Create a function called calcCircumfrence:
     Pass the radius to the function.
     Calculate the circumference based on the radius, and output "The circumference is NN" */

// Solution:
function calcCircumfrence(radius){
    const PI = 3.1415
    let circumFerence = 2 * PI * radius
    return circumFerence
}
let radius = 20
let circleCircumFerence = calcCircumfrence(radius)
console.log('-----------------Q2------------')
console.log('radius of the circle is',radius)
console.log('Circumference is ',circleCircumFerence)






/* 3. Following is an Array of my favorite places
      Add some two favorite place and remove  Kathmandu from the list and
      also print the array with its length.

      ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"] */

// solution:-

let myFavouritePlaces = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
console.log('-----------Q3--------------')
console.log("Initial array before removing 'kathmandu' is: ",myFavouritePlaces)
// Get index of Kathmandu
let ktmIndex = myFavouritePlaces.indexOf("Kathmandu")
//Adding two favourite places Mustang,Lumbini
// Remove Kathmandu from list
myFavouritePlaces.splice(ktmIndex,1,"Mustang","Lumbini")
// // Single line implementation
// myFavouritePlaces.splice(myFavouritePlaces.indexOf("Kathmandu"),1)
console.log("Array after removing 'kathmandu' and adding two places 'Mustang' and 'Lumbini is ",myFavouritePlaces)






/*  4. Make simple Tip Calculator to calculate tips.
    User should be able to add total amount and tip percentage he/shw want to give. */

//Solution(see HTML page):-

function getTotalTip(){
    var totalBill = document.getElementById('align-1').value
    var tipPercent = document.getElementById('align-2').value
    // To convert input string to float
    try{
        totalBill = parseInt(totalBill)
        tipPercent = parseFloat(tipPercent)
        if(isNaN(totalBill) | isNaN(tipPercent)){
            let errorMessage = `Enter valid credentials.....`
            document.getElementById('align-4').innerHTML = errorMessage
        }
        else{
            let totalTip = totalBill* (tipPercent/100)
            // tofixe() method will round or pad with zeros if necessary
            // returns string
            totalTip = totalTip.toFixed(2)
            let returnTip = `Your total Tip is Rs. ${totalTip}`
            document.getElementById('align-4').innerHTML = returnTip
    }
}
    catch(err){
        let errorMessage_ = `Error Occured! Try again!!`
        document.getElementById('align-4').innerHTML = errorMessage_
    }




}

