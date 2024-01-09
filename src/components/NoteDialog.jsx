
import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, InputLabel } from '@material-ui/core'

export default function NoteDialog({ isOpen, isClosed, addNote }) {

  const categories = [
    "Personal",
    "Home",
    "Business"
  ];

  const [newNote, setNewNote] = React.useState({
    id: nanoid(),
    Title: "",
    Category: "",
    Description: ""
  })

  const handleChange = (e, field) => {
    const { id, value } = e.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [id]: value,
      [field]: value,
    }));
  };



  const handleAddNote = () => {
    if (newNote.Title && newNote.Description) {
      addNote(newNote);
      setNewNote({
        id: nanoid(),
        Title: "",
        Category: "",
        Description: "",
      });
    } else {
      console.error("Title and Description are required.");
    }
  };

  return (
    <div className="note--dialog">
      <>
        <Dialog open={isOpen}
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
              value={newNote.Title}
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
              value={newNote.Category}
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
              value={newNote.Description}
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Add Description"
              multiline
              rows={6}
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