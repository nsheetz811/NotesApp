import React from "react"
import SearchIcon from "../assets/icons/search-icon.svg"

export default function SearchBar({handleClickOpen}){
 return(
<div className="searchbar--container">
<input className="searchbar" placeholder="Search"/>

<img src={SearchIcon} alt="search" className="search--icon"/>
<button className="searchbar--button" onClick={handleClickOpen}>Add</button>
</div>
 )
}