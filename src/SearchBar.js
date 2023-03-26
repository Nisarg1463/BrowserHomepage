import './SearchBar.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import React from 'react'

function SearchBar() {
  var [value, setValue] = useState('')
  return (
    <>
      <div className="glow">
        Coding is <div className="flicker">fun</div>
      </div>
      <div className="searchArea">
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && value !== '') {
              window.location.href = `https://www.google.com/search?q=${value}`
            }
          }}
          autoFocus
        ></input>
        <a
          href={`https://www.google.com/search?q=${value}`}
          rel="external"
          target="_blank"
        >
          <BiSearchAlt2 className="searchButton" />
        </a>
      </div>
    </>
  )
}

export default SearchBar
