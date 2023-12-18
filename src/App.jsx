import './App.css';
import React, { useState } from 'react';
import Split from 'react-split';
import SearchBar from './components/SearchBar';
import Editor from './components/Editor';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([]);

  // function createNote() {
  //   const newNote = {
  //     id: nanoid(), // Assuming you have nanoid imported
  //     title: '',
  //     content: '',
  //   };
  //   setNotes([...notes, newNote]);
  // }

  return (
  <div className="homescreen">
  <SearchBar/>
  </div>
  )
}

export default App;