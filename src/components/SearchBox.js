import React from 'react'
import '../styles/SearchBox.scss';

// Icons
import { Search } from "react-feather";

export default function SearchBox({ searchRef, onSearchChange }) {
  return (
    <div className="search">
      <Search size={20} className="search__icon"/>
      <input ref={searchRef} onChange={onSearchChange} className="search__input" name="search" type="text" placeholder="Search for a country..."/>
    </div>
  )
}
