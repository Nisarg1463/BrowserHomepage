import React from 'react'
import './favourites.css'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function Favourites() {
  var [favourites, updateFavoutites] = useState()
  return (
    <>
      <FavouriteChip content={<AiOutlinePlus className="plus" />} />
    </>
  )
}

function FavouriteChip({ content }) {
  return <div className="circle">{content}</div>
}

export default Favourites
