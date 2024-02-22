import React from "react";
import Note from "./Note";
import emptyState from '../assets/icons/no-notes-illustration.svg';
import noNotesFound from '../assets/icons/no-search-results-illustration.svg'


export default function NoteList({ notes, editNotes, openDeleteDialog, completedNote, filteredNotes,searchInput }) {

  const [currentCategory,setCurrentCategory] = React.useState("All")
  const [toggleCompleted, setToggleCompleted] = React.useState(false)

  const handleCategory = (category) =>{
setCurrentCategory(category)
  }
 
const handleCompletedNotes = () =>{
setToggleCompleted(showCompletedNotes => !showCompletedNotes)
}
  const renderTabs = () =>{
    const categories = ['All', 'Personal', 'Home', 'Business'];

    return(
      <div>
        {categories.map((category)=>(
          <button 
          key= {category}
          onClick={()=>handleCategory(category)}
          className={currentCategory === category ?  "active-tab" : "tab"}
          >
          {category}
          </button>
          
        ))}
      </div>
    )
  }

  const renderCategory = ()=> {

    const filteredCategories = currentCategory === "All" ? sortedNotes : sortedNotes.filter((note)=> note.Category === currentCategory)

    const notesToRender = toggleCompleted ? notes.filter((note)=> note.completed) : filteredCategories
    return(
      <div className = "note--container">
     {notesToRender.map((note)=>(
        <Note
        key={note.id}
        note={note}
        editNotes={editNotes}
        openDeleteDialog={openDeleteDialog}
        completedNote={completedNote}
        />
      ))}
      </div>
    )
  }

  const sortedNotes = (filteredNotes.length > 0 ? filteredNotes : [...notes]).sort((note1, note2) => {
    if (note1.completed && !note2.completed) {
      return 1;
    } else if (!note1.completed && note2.completed) {
      return -1;
    }
    return new Date(note2.date) - new Date(note1.date);
  });

  return (
    <div className = "notes--list">
      
      <label>
        Show completed notes 
      <input type="checkbox" onChange={()=> handleCompletedNotes()} checked={toggleCompleted}/>
       </label>
      
      {renderTabs()}
     
  {notes.length === 0 && !searchInput && (
   <>
      <img src={emptyState} alt="no-notes" className="notes--img"/>
      <p>You have no notes!</p>
    </>
  ) }


{( filteredNotes.length <= 0 && searchInput  ? (
      <>
        <img src={noNotesFound} alt="no-notes-found" className=""/>
        <p>No notes found</p>
      </>
    ) : renderCategory()
  )}
    
      </div>
     
  );
  
};

