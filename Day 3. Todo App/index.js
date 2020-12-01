//  when browser loads HTML completely
// Do following
window.onload = function(){
    onGetSavedNotes()
}

let key ="my_notes"
// To add notes to local storage
function onAddNotes(){
    // To get data from HTML we use dome
    let myNotes =
    document.getElementById('notes').value
    console.log(myNotes)
    // To store data to local storage
    localStorage.setItem(key,myNotes)

    // To store data to session
    sessionStorage.setItem(key,myNotes)
    // To get saved notes
    onGetSavedNotes()
}


// To get saved notes from local storage
function onGetSavedNotes(){
    // To get data from local storage using key
    let notes = localStorage.getItem(key)
    // To write notes text to id
    document.getElementById('myNotes').innerText = notes
    console.log(notes)

}
