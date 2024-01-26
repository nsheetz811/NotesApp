import React from "react";
import Note from "./Note";

export default function NoteList({ notes, editNotes, openDeleteDialog, completedNote, filteredNotes }) {

  const sortedNotes = (filteredNotes.length > 0 ? filteredNotes : [...notes]).sort((note1, note2) => {
    if (note1.completed && !note2.completed) {
      return 1;
    } else if (!note1.completed && note2.completed) {
      return -1;
    }
    return new Date(note2.date) - new Date(note1.date);
  });

  return (
    <div>
      <h2 className="your--notes">{notes.length <= 0 ? "You have no notes" : "Your notes"}</h2>
      <div className="notes--container">
        {sortedNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            editNotes={editNotes}
            openDeleteDialog={openDeleteDialog}
            completedNote={completedNote}
          />
        ))}
      </div>
    </div>
  );
};

