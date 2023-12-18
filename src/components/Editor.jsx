// Editor.js
import React, { useState } from 'react';

export default function Editor(props) {
  const { createNote } = props;
  const [note, setNote] = useState({ title: '', content: '' });


  return (
    <div className="editor--container">
      
    </div>
  );
}
