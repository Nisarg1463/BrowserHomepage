import React from 'react'
import './App.css'
import Favourites from './favourites'
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="App">
      <div className="searchPanel">
        <SearchBar />
      </div>
      <div className="favourites">
        <Favourites />
      </div>
    </div>
  )
}

export default App
