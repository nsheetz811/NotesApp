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
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    id: nanoid(),
    Title: "",
    Category: "",
    Description: "",
    date: Date(),
    completed: false

  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  //open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  //close the modal
  const handleClose = () => {
    setOpen(false);
  };
//open the dialog to delete a note
  const openDeleteDialog = (note) => {
    setSelectedNoteForDeletion(note);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setSelectedNoteForDeletion(null);
    setDeleteDialogOpen(false);
  };

  //check if the ID of the note matches the selectedNote
  function editNotes(selectedNote) {
    // Set the updated note when editing
    setCurrentNote({
      id: selectedNote.id,
      Title: selectedNote.Title,
      Category: selectedNote.Category,
      Description: selectedNote.Description,
      date: Date(),
      completed: false
    });

    // Open the edit dialog or perform other actions
    setOpen(true);
  }
//filter out the notes that do do not equal to the selectedNote to be deleted
 //-you need to update state for both the notes array and the filtered notes array to make sure the note is deleting in both arrays-//
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
        // Toggle the completed property of the selectedNote
        selectedNote.completed = !selectedNote.completed;

        // Remove the selectedNote from its current position
        updatedNotes.splice(noteIndex, 1);

        // Move the completedNote to the beginning of the array
        updatedNotes.unshift(selectedNote);
      }

      return updatedNotes;
    });
    setCompleted(true)
  }


  return (
    <div className="homescreen">
      <SearchBar
        handleClickOpen={handleClickOpen} notes={notes} setFilteredNotes={setFilteredNotes} />
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
      />
      <DeleteNoteDialog
        isOpen={isDeleteDialogOpen}
        onClose={closeDeleteDialog}
        onDelete={deleteNote}
      />

    </div>
  )
}