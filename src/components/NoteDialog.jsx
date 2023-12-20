import * as React from 'react';

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@material-ui/core'

export default function NoteDialog({ isOpen, isClosed }) {

  const categories = [
 "Personal",
 "Home",
 "Business"
  ];
  return (
    <div className="note--dialog">
      <>
        <Dialog open={isOpen}
          onClose={isClosed}
          fullWidth
          
        >
          <DialogTitle>Add Note</DialogTitle>
          <DialogContent>
          <FormHelperText >Title</FormHelperText>
            <TextField
              autoFocus
              placeholder="Add Title"
              margin="dense"
              id="title"
              type="text"
              variant="outlined"
             
            />
          
         
          <FormHelperText className="title">Category</FormHelperText>
       
          <TextField
        size="small"
        
        sx={{ width: 200 }}
        select
        variant="outlined"
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
     
      <FormHelperText className="title">Description</FormHelperText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
             
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Add Description"
              multiline
              rows={6}
              maxRows={6}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={isClosed}>Cancel</Button>
            <Button onClick={isClosed}>Add</Button>
          </DialogActions>
        </Dialog>
      </>
    </div>
  );
}