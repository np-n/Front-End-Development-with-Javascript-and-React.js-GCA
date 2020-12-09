//Objects
let Person = {'Name': 'Netra Prasad Neupane',
'address':'syangja'}
let obj = {true:false}
console.log(obj)
Person[1] = 43
Person[true]=false
console.log(Person)



// // Map
// console.log('-----------------------------------------Map-------------------------------')
// let map = new Map()
// // To set value  use set() method
// // If reset value to single set then value will be replaced
// map.set("1",'This is String')
// map.set(1,'This is integer')
// map.set(true,'This is boolean')
// map.set('2077-08-23',"This is today's date")

// //Storing array to maps
// let ary = ['netra','hari']
// map.set('array',ary)

// // get() method
// // To get value from the map
// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map.get(true))
// console.log(map.get('2077-08-23'))
// console.log(map.get('array')[0])


// // To check if the key exist or not
// // return undefinded if key doesn't exists
// console.log(map.get('name'))

// // map visualization
// console.log(map)

// // has() method
// // returns true if has value for corresponding key else return false
// console.log(map.has('2077-08-23'))// true
// console.log(map.has(3))// false

// //delete() method
// // remove key-value pairs from the map
// map.delete(1)
// console.log(map)

// // size method
// // To get size of map
// console.log(map.size)

// // clear() method
// // To clear all key pairs value in map
// map.clear()
// console.log(map)// map becomes empty
// console.log(map.size)// size becomes zero


// // Iteration/loop over map

// let fruitsMarket = new Map([
//     ['mango',300],
//     ['orange',200],
//     ['apple',300],
//     ['grapes',400]
// ]
// )
// console.log(fruitsMarket)
// fruitsMarket.set('banana',200)
// console.log(fruitsMarket)

// // for-of loop to get keys
// console.log('------------------------for-of loop----------------------')
// console.log('------------Keys---------------')
// for(let fruits of fruitsMarket.keys()){
//     console.log(fruits)
// }
// console.log('------------values---------------')
// for(let fruitsPrice of fruitsMarket.values()){
//     console.log(fruitsPrice)
// }
// console.log('-------------------key-value-------------------')
// for(let fruits of fruitsMarket){
//     console.log(fruits)
// }

// // using forEach
// console.log('-------------forEach()----------------------')
// // Accessing key-value pairs
// fruitsMarket.forEach(function(key,value){
//     console.log(key+' -> '+value)
// })
// // Accessing only key
// fruitsMarket.forEach(function(key){
//     console.log(key)
// })
// // Accessing value only
// fruitsMarket.forEach(function(value){
//     console.log(value)
// })




// // Set
// console.log('-----------------------------------------set----------------------------------------')
// // Consist of unique value
// let set = new Set()// creates empty set
// let ashish = {name:"Ashish"}
// let ram = {name:'ram'}
// let hari = {name:'hari'}
// // To add value to set
// set.add(ashish)
// set.add(ram)
// set.add(hari)
// console.log(set)


// // To check unique elements in array 
// let ary = ['1','44','3','1','5',8,'3']
// console.log('This is array',ary)
// let set_ = new Set(ary)
// console.log('This is set',set_)

// // add() method to add elements in set
// set_.add(43)
// console.log(set_)

// // has() method to check elements in set
// console.log(set_.has(8))
// console.log(set_.has(33))

// // delete() method delete elements from the list
// set_.delete('1')
// console.log(set_)

// //size method gives size of the set
// console.log(set_.size)

// // Iteration on sets

// // for-of loop
//  for(let num of set_){
//      console.log(num)
//  }
//  for(user of set){
//      console.log(user.name)
//  }

//  // forEach loop
//  set.forEach(function(value){
//      console.log(value)
//  })

//  //set example
//  let values = ["ram","sita","hari","krishna","ram","sita","sunil"]
//  function getUniquevalue(array){
//      return Array.from(new Set(array))
//  }
//  alert(getUniquevalue(values))

window.onload = function(){
    createElement()
}


 // To create HTML tag
 function createElement(){
     let mainTag = document.getElementById('main')
     // To create div tag
     let divTag = document.createElement('div')
     let innerDivTag = document.createElement('div')
     divTag.appendChild(innerDivTag)
     // To create p tag
     let pTag = document.createElement('p')
     pTag.innerText = 'This is P tag'
     // Adding p tag inside div tag
     divTag.appendChild(pTag)
     mainTag.appendChild(divTag)
 }