import React from "react"
import SearchIcon from "../assets/icons/search-icon.svg"

export default function SearchBar({ handleClickOpen, notes,setFilteredNotes }) {
 const [searchInput, setSearchInput] = React.useState("");


 const handleChange = (e) => {
  //searchTerm is what the user is entering
  const userInput = e.target.value
  setSearchInput(userInput);

  // Check if notes and setFilteredNotes are defined before filtering
  if (notes && setFilteredNotes) {
    // Perform case-insensitive, partial matching
    const filtered = notes.filter((note) =>
    //filtering the Title fo the note that includes what the user typed
      note.Title.toLowerCase().includes(userInput)
    );
    setFilteredNotes(filtered);
  }
};

 return (
  <div className="searchbar--container">
   <input
    className="searchbar"
    placeholder="Search"
    value={searchInput}
    onChange={handleChange} />

   <img src={SearchIcon} alt="search" className="search--icon" onClick={(e) => handleChange(e)} />
   <button className="searchbar--button" onClick={handleClickOpen}>Add</button>
  </div>
 )
}