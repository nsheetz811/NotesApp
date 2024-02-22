import React from 'react';
 import DeleteIcon from "../assets/icons/delete-icon.svg"
 import EditIcon from "../assets/icons/edit-icon.svg"

export default function Note ({ note, editNotes, openDeleteDialog, completedNote }){


  
 const getCategoryColorClass = (category) => {
  switch (category) {
    case 'Personal':
      return 'pink';
    case 'Home':
      return 'green';
    case 'Business':
      return 'purple';
    default:
      return '';
  }
};

 return(
  <div className="noted">
  <div key={note.id} className={`notes ${note.completed ? 'completed' : ''}`}>
  <div className="note--topMenu">
    <p className={`${"note--category"} ${getCategoryColorClass(note.Category)}`}>
      {note.Category}
    </p>
    <input
      type="checkbox"
      className="icons"
      checked={note.completed}
      onChange={() => completedNote(note)}
    />
    <img
      src={EditIcon}
      alt="SVG Icon"
      className="icons"
      onClick={() => editNotes(note)}/>
    
    <img
    src={DeleteIcon}
      alt="SVG Icon"
      className="icons"
      onClick={() => openDeleteDialog(note)}/>
  </div>

  <h3 className="note--title" style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
    Title: {note.Title}
  </h3>
  <p className="note--description" style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
    Description: {note.Description}
  </p>
  <p className="note--date"><i>Date Added:</i> {new Date(note.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}</p>
</div>
</div>
);
 
}