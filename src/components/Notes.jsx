import React from "react";

export default function Notes({ notes }) {
  return (
    <div className="notes--container">
      <h2>Your notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>Title: {note.Title}</h3>
          <p>Category: {note.Category}</p>
          <p>Description: {note.Description}</p>
        </div>
      ))}
    </div>
  );
}
