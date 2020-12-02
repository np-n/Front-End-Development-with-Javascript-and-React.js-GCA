let months = ['Jan','Feb','April','May','Jun','July','Aug','Sep','Oct','Sep','Nov','Dec']

//  when browser loads HTML completely
// Do following
window.onload = function(){
    onGetSavedNotes()
}

let key ="my_notes"
// let myNotes = []
// To checks if notes already exists in storage
// If notes already exist then fetch the notes
// If notes are not exist create empty array
// using ternary operator
let myNotes = localStorage.getItem(key)?
    JSON.parse(
        localStorage.getItem(key)):[]
// To add notes to local storage
function onAddNotes(){
    // To get data from HTML we use dome
    let myNote =
    document.getElementById('notes').value
    // To set text area null
    document.getElementById('notes').value =''
    // To store multiple values in notes
    let note = {}
    note.value = myNote
    note.date = new Date()
    // Gives unique timeframe for millisecond
    note.id = new Date().getTime()
    // console.log(myNote)
    myNotes.push(note)
    // When sending data to a web server, the data has to be a string.
    // Convert a JavaScript object into a string with JSON.stringify().
    // JSON : Array of objects
    // To store data to local storage
    localStorage.setItem(key,JSON.stringify(myNotes))
    // // To store data to session
    // sessionStorage.setItem(key,myNotes)

    // To get saved notes
    onGetSavedNotes()
}


// To get saved notes from local storage
function onGetSavedNotes(){
    // To get data from local storage using key
    let notes = localStorage.getItem(key)
    // //Alternative way of getting notes
    // //This notes is already parsed because we fetched it already
    noteHTML = ''
    JSON.parse(notes).reverse().forEach(function(val,index){
        // checking if array is empty,or if contains multiple value,avoid this condition
        if (val){
        // console.log(index)
        // console.log(val)
        noteHTML = noteHTML +
                `<div>
                <img  onclick="deleteNotes(${index})" id="delete-note" src="delete.png">
                <small>${getReadableDate(val.date)}</small>
                <p>${val.value}</p>
                </div>`
        }
    })

    // When receiving data from a web server, the data is always a string.
    // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    // To write notes text to id
    document.getElementById('myNotes').innerHTML = noteHTML
    // console.log(typeof(notes))
    // console.log(notes)

}


function getReadableDate(date){
    let dateReadable = new Date(date)
    // let fullDate = dateReadable.toDateString()
    let fullDate = dateReadable.getDate() +' '+ months[dateReadable.getMonth()]+ ' '+
            dateReadable.getFullYear()+' '+ dateReadable.getHours()+':'+dateReadable.getMinutes()
  return fullDate
}


function deleteNotes(index){
    // console.log(index)
    // To delete note from the given index
    myNotes.reverse().splice(index,1)
    localStorage.setItem(key,JSON.stringify(myNotes.reverse()))
    console.log('Deleted')
    onGetSavedNotes()
}

// // Testing
// function deleteNotes(index){
// ary = ['npn','neupane','all']
// ary.splice(index,1)
// console.log(ary)
// }

// deleteNotes(0)


