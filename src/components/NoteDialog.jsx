import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, InputLabel } from '@material-ui/core'

export default function NoteDialog({ isClosed, currentNote, setCurrentNote, notes, setNotes, setOpen,setFilteredNotes,filteredNotes }) {


  const categories = [
    "Personal",
    "Home",
    "Business"
  ];

  const handleChange = (e, field) => {
    const { id, value } = e.target;
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [id]: value,
      [field]: value,
    }));
  };

  const handleAddNote = () => {
    // Check if the Title and Description of the new note are provided
    if (currentNote.Title && currentNote.Description) {
      // Check if the newNote already exists in the notes array
      const noteIndex = notes.findIndex((note) => note.id === currentNote.id);
  
      if (noteIndex >= 0) {
        // If the note already exists, update it in the notes array
        setNotes((prevNotes) => {
          const updatedNotes = [...prevNotes];
          updatedNotes[noteIndex] = currentNote;
          return updatedNotes;
        });

        //if there are filteredNotes in the array
        if (filteredNotes.length > 0) {
          setFilteredNotes((prevFilteredNotes) => {
            const updatedFilteredNotes = [...prevFilteredNotes];
            const filteredNoteIndex = updatedFilteredNotes.findIndex((note) => note.id === currentNote.id);
            
            //if the specific index of the note in the filteredArray is greater than 0
            if (filteredNoteIndex >= 0) {
              updatedFilteredNotes[filteredNoteIndex] = currentNote;
            }
  
            return updatedFilteredNotes;
          });
        }
      } else {
        // If the note doesn't exist, add it to the notes array
        setNotes((prevNotes) => [...prevNotes, currentNote]);
  
        // If filteredNotes are present, add the note to the filteredNotes array
        if (filteredNotes.length > 0) {
          setFilteredNotes((prevFilteredNotes) => [...prevFilteredNotes, currentNote]);
        }
      }
  
      // Reset the newNote state for the next note
      setCurrentNote({
        id: nanoid(),
        Title: "",
        Category: "",
        Description: "",
        date: Date(),
      });
  
      // Close the modal
      setOpen(false);
    } else {
      // Log an error if Title and Description are not provided
      console.error("Title and Description are required.");
    }
  };
  
  return (
    <div className="note--dialog">
      <>
        <Dialog open
          onClose={isClosed}
          fullWidth

        >
          <DialogTitle>Add Note</DialogTitle>

          <DialogContent>
            <InputLabel style={{ color: 'black' }}>Title</InputLabel>
            <TextField
              autoFocus
              placeholder="Add Title"
              margin="dense"
              id="Title"
              type="text"
              variant="outlined"
              value={currentNote.Title}
              onChange={handleChange}

            />

            <InputLabel style={{ color: 'black', margin: 5 }}>Category</InputLabel>
            <TextField
              id="Category"
              name="Category"
              size="small"
              sx={{ width: 200 }}
              select
              variant="outlined"
              value={currentNote.Category}
              onChange={(e) => handleChange(e, "Category")}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>


            <InputLabel style={{ color: 'black' }}>Description</InputLabel>
            <TextField
              autoFocus
              margin="dense"
              id="Description"
              value={currentNote.Description}
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Add Description"
              multiline
              minRows={6}
              maxRows={6}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={isClosed}>Cancel</Button>
            <Button onClick={handleAddNote}>Add</Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
}