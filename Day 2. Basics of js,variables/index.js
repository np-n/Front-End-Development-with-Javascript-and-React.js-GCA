// /* ---------Javascript variable:----------*/

// //global scope or function scope
// var varVariable = "This is var variable"
// //block scope
// let letVariable = "This is let variable"
// //block scope
// const constVariable = "this is const variable"
// console.log(window.varVariable)
// // both variable defined with let and const are undefined in window object
// console.log(window.letVariable)
// console.log(window.contVariable)
// console.log(varVariable)
// console.log(letVariable)
// console.log(constVariable)

// To zoom web page or developer console
// First go to the respective fields
// Ctrl +
// To zoom out
// Ctrl -

// // Let variable scope is local i.e within the block only
// // only within the for lopp
// for(let i =1;i<10;i++){
//     console.log(i);
// }
// // doesn't recognize i outside for loop because i variable scope is local incase of let
// console.log(i)
// console.log('------------------')
// // var variable has global scope
// for(var i =1;i<10;i++){
//     console.log(i);
// }
// //prints 10 because i is global variable and it's value is now 10
// console.log(i)



/* ----------Expressions :-----------------*/

// // Associativity is from left to right
// concatenate integer with string
// let ans = 16 + "text"
// console.log(ans)

// // javascript doesn't take data sensitivly
// // first 2 integers are added
// // Then integers and string are concatenated
// // then string and integer are concatenated
// let ans1 = 10+ 12 + "text"+2 +3
// // To set priority to any expression
// // use parseInt() or use parenthesis
// console.log(ans1)

// let ans2 =  "text"+2
// console.log(ans2)



/*  ----------Operators:-------------------*/

// // == compare only value
// // === compare both value and type of data
// let a = true
// let b = 1
// // compare value and console True
// console.log(a==b)
// // compare type and value and console False, type is different
// console.log(a===b)



/* --- Javascript Objects-------------*/

// function book(title,author){
//     // add title and author variables to function scope
//     this.title = title
//     this.author = author
// }

// // mybook is object of book function
// Let mybook = new book("ML","Andrew")
// console.log(mybook.title)
// console.log(mybook.author)
// console.log(mybook)



/* ------Javascript Array------*/

// // Getting length of array
// let fruits = ['Mango','Orange','Apple']
// console.log(fruits)
// // To get length of array
// console.log(fruits.length)

// // Methods in array---------
// let fruits = ['Mango','Orange','Apple']
// // pop() to remove last element
// fruits.pop()
// console.log(fruits)

// // push() to insert element at end of array
// fruits.push('kiwi')
// console.log(fruits)

// // TO insert element
// fruits[2] = 'Apple'
// console.log(fruits)

// // delete deletes value but keep reference memory
// delete (fruits[2])
// console.log(fruits)


// //  Array splicing : splice()------

// // To add and remove elements
// // To add new elements after one element(at 1 index) without removing elements
// fruits.splice(1,0,"Avogado")
// console.log(fruits)

// // To add elements by removing 1 element
// // Insert elements after second elements i.e. @ index 2 and furter
// // remove the single element next to second element
// fruits.splice(2,1,"Lemon","banana")
// console.log(fruits)

// // To remove items---------
// // Reoving single element from after third element or 3 index element
// fruits.splice(3,1)
// console.log(fruits)


// // array concat() method-----------

// let arr1 = ['rice','egg']
// let arr2 = ['panir','Momo']
// let arr3 = ['Burger','Soup']
// // arr2 and arr3 are concatenated to arr1 simultaneously
// let foods = arr1.concat(arr2,arr3)
// let foods_ = arr1.concat(arr2)
// console.log(foods)
// console.log(foods_)

// // Array slice----------

// let foods = ['rice','egg','panir','Momo']
// // To get elements from array with index/position
// // first index is inclusive and last index is exclusive
// var my_favourite = foods.slice(0,2)
// console.log(my_favourite)
// console.log(foods.slice(1,4))


// sorting array--------

// let foods = ['rice','egg','panir','momo']
// // sort alphabatically
// // Case Sensitive
// console.log(foods.sort())
// // To reverse alphabatically
// console.log(foods.reverse())

// let abc = [1,4,66,2353,64]
// console.log(abc.sort())
// console.log(abc.reverse())



/* --------conditional statements--------*/

// //if-else

// console.log('if-else')
// let a = true
// if (a){
//     console.log('true')
// }
// else{
//     console.log('False')
// }

// let b = 2
// if (b < 2){
//     console.log('small')
// }
// else if(b == 2){
//     console.log(2)
// }
// else{
//     console.log('Large')
// }



/*********** loops ********************/

// // for loop

// console.log('for loop')
// for(let i=1; i<10;i++){
//     // ** to square
//     console.log(i**2)
// }

// // while loop
// console.log('While loop')
// let count =10
// while(count >0){
//     console.log(count)
//     count = count -1
// }

// // do while

// // Execute once before conditon checked
// console.log('Do while')
// let i =1
// do{
//     console.log(i)
//     i++
// }
// while(i<10)



// // for in loop---------------

// // person is object
// let person ={
//     fname:"John",
//     lname:"Doe",
//     age:25
// }
// let x;
// for (x in person){
//     console.log(x)
//     console.log(person[x])
// }


// // for each loop------------------

// Reassigning value to any variables shows error in javascript
// let fruits = ['mango','ornage','banana']
// fruits.forEach(function(value){
//     console.log(value)
// })

// let fruits = ['mango','ornage','banana']
// fruits.forEach(function(value,index){
//     console.log(index)
//     console.log(value)
// });

//  // Alternative approach of forEach
// names = ['npn','netra','naran']
// names.forEach(i =>console.log(i))



/*---------------- switch ------------------*/

// function getSwitchResult(){
//     let age = new Date()
//     // document.write(age)
//     // document.write(age.getDay())
//     // document.write(age.getDay().toString())
// toString() converts to string type
//     switch(age.getDay().toString()){
//         case '0':
//             document.write("Sunday")
//             break;

//         case '1':
//             document.write("Monday")
//             break;

//         case '2':
//             document.write("Tuesday")
//             break;

//         case '3':
//             document.write("Wednesday")
//             break;

//         case '4':
//             document.write("Thursday")
//             break;

//         case '5':
//             document.write("Friday")
//             break;

//         case '6':
//             document.write("Saturday")
//             break;

//         default:
//         document.write('Error')

//     }
// }



/* new Date() object---------------------*/
// let data = new Date()
// console.log(data)
// // To convert date into string format
// console.log(data.toDateString())
// console.log(data.getDay())
// console.log(data.getMonth()+1) // Since getMonth() returns month from 0-11 not 1-12
// console.log(data.getFullYear())
// // To convert date to readable format
// let dateStr = data.getDay() +"/"+ data.getMonth() +"/"+ data.getFullYear()
// console.log(dateStr)




/*-------------------Events in javascript--------------------*/
// function clicked(){
//     alert('Button clicked')
// }


/*--------------To get type of  data------------------------*/
// let abc =2
// console.log(typeof(abc))

// let abc1 ='1'
// console.log(typeof(abc1))

// let abc3 = 11.4343
// console.log(typeof(abc3))

// let abc4 = [33,44]
// console.log(typeof(abc4))


// let person ={
//     'name': 'Netra Prasad Neupane',
//     'Age':22,
// }
// console.log(typeof(person))
