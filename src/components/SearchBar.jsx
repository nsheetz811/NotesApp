import React from "react"
import SearchIcon from "../assets/icons/search-icon.svg"

export default function SearchBar({ handleClickOpen, notes,setFilteredNotes,searchInput,setSearchInput }) {



 const handleChange = (e) => {

  const userInput = e.target.value
  setSearchInput(userInput);

    const filtered = notes.filter((note) =>

      note.Title.toLowerCase().includes(userInput)
    );
    setFilteredNotes(filtered);
  
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