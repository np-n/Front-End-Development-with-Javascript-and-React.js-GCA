import React,{useState,useEffect,Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import deleteImage from '../img/delete.png'

export default function TodoHome() {
    let [note,setNote] = useState()
    let key ="my_notes"

    let myNotes = localStorage.getItem(key)?
        JSON.parse(localStorage.getItem(key)):[]

    function handleChange(event){
        setNote(event.target.value)
    }

    function onAddNotes(){
        let notes ={}
        notes.value = note
        notes.date = getReadableDate()
        notes.id = new Date().getTime()
        myNotes.push(notes)

        localStorage.setItem(key,JSON.stringify(myNotes))
        onGetSavedNotes()
    }
    function getReadableDate(){
        let dateReadable = new Date()
        let fullDate = dateReadable.toDateString()
        let fullTime = dateReadable.toLocaleTimeString()
        return fullDate+' '+fullTime
    }

    function onGetSavedNotes(){
        let note_ = localStorage.getItem(key)
        console.log(note_)
        let html =''
        JSON.parse(note_).reverse().forEach(function(value,index){
            if(value){
            console.log(value.date)
            html+= `<div>
            <img id="delete-note" src=${deleteImage} onclick=${deleteNotes(index)}>
            <small>${value.date}</small> 
            <p>${value.value}</p></div>`
        }
        })
        document.getElementById('myNotes').innerHTML = html
    }

    function deleteNotes(index){
        myNotes.reverse().splice(index,1)
        localStorage.setItem(key,JSON.stringify(myNotes.reverse()))
        onGetSavedNotes()
    }
  
    useEffect(()=>{
        onGetSavedNotes()

    })
    
    return (
        <div>
        <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: '100vh' }} >
        <h1>Todo App</h1>
        <div>
        <textarea id="note" placeholder ="Write your notes here!" onChange={handleChange}></textarea>
        <button onClick={onAddNotes} id="note-button"> Add Notes</button>
        </div>
    <div id="myNotes">
    </div>
        </Typography>
      </Container>
        </div>
    )
}
