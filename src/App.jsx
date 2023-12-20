import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NoteDialog from './components/NoteDialog';
import { nanoid } from 'nanoid';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <div className="homescreen">
  <SearchBar handleClickOpen={handleClickOpen}/>
  {open ? <NoteDialog isOpen={handleClickOpen} isClosed={handleClose}/> : ""}
  
  </div>
  )
}

export default App;