import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NoteDialog from './components/NoteDialog';
import Notes from './components/Notes';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [open, setOpen] = React.useState(false);
  const [notes,setNotes] = React.useState([]);


useEffect(() =>{
  localStorage.setItem('notes',JSON.stringify(notes))
},[notes])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
  <div className="homescreen">
  <SearchBar handleClickOpen={handleClickOpen}/>
  {open ? <NoteDialog isOpen={handleClickOpen} isClosed={handleClose} addNote={handleAddNote} /> : ""}
  <Notes notes={notes}/>
  </div>
  )
}

export default App;