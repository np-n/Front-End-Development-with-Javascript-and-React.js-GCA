

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
    // console.log(notes)
    noteHTML = ''
    JSON.parse(notes).forEach(function(val){
        noteHTML = noteHTML +
                `<div>
                <p>${getReadableDate(val.date)}</p>
                <p>${val.value}</p>
                </div>`
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
    let fullDate = dateReadable.toDateString()
    return fullDate
}
