import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NoteList from './components/NoteList';
import DeleteNoteDialog from './components/DeleteNoteDialog';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';


import NoteDialog from './components/NoteDialog';

export default function App() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNoteForDeletion, setSelectedNoteForDeletion] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([])
  const [complete, setCompleted] = useState(false)
  const [searchInput, setSearchInput] = React.useState("");
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [currentNote, setCurrentNote] = useState({
    id: nanoid(),
    Title: "",
    Category: "",
    Description: "",
    date: Date(),
    completed: false,
  });


	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));
		if (notes) {
			setNotes(notes);
		}
	}, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openDeleteDialog = (note) => {
    setSelectedNoteForDeletion(note);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedNoteForDeletion(null);
    setDeleteDialogOpen(false);
  };

 
  function editNotes(selectedNote) {
 
    setCurrentNote({
      id: selectedNote.id,
      Title: selectedNote.Title,
      Category: selectedNote.Category,
      Description: selectedNote.Description,
      date: Date(),
      completed: false,
      error:false
    });
    setOpen(true);
  }

  const deleteNote = () => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== selectedNoteForDeletion.id));
    setFilteredNotes((prevFilteredNotes) =>
      prevFilteredNotes.filter((note) => note.id !== selectedNoteForDeletion.id)
    );
    setDeleteDialogOpen(false);
  }

  function completedNote(selectedNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      const noteIndex = updatedNotes.findIndex((note) => note.id === selectedNote.id);

      if (noteIndex >= 0) {
  
        selectedNote.completed = !selectedNote.completed;

        
        updatedNotes.splice(noteIndex, 1);

      
        updatedNotes.unshift(selectedNote);
      }

      return updatedNotes;
    });
    setCompleted(true)
  }

  return (
    <div className="homescreen">
      <SearchBar
        handleClickOpen={handleClickOpen} 
        notes={notes}
        setSearchInput={setSearchInput}
        setFilteredNotes={setFilteredNotes}
        searchInput={searchInput}
        filteredNotes={filteredNotes} />

      {open ?
        <NoteDialog
          isOpen={handleClickOpen}
          isClosed={handleClose}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          editNotes={editNotes}
          notes={notes}
          setOpen={setOpen}
          setNotes={setNotes}
          filteredNotes={filteredNotes}
          setFilteredNotes={setFilteredNotes} /> : ""}
      <NoteList
        notes={notes}
        editNotes={editNotes}
        deleteNote={deleteNote}
        openDeleteDialog={openDeleteDialog}
        completedNote={completedNote}
        filteredNotes={filteredNotes}
        searchInput={searchInput}
      />
      <DeleteNoteDialog
        isOpen={isDeleteDialogOpen}
        onClose={closeDeleteDialog}
        onDelete={deleteNote}
      />

    </div>
  )
}