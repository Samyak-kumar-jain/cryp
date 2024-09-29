import React, { useState } from 'react'
import "./Searchbar.css"
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({search,onSearchChange}) => {
   
  return (
    <>
    <div className='search-flex'>
        <SearchIcon/>
        <input type='search' placeholder='Search'
        value={search}
        onChange={(e)=>onSearchChange(e)}></input>
        
    </div>



    
    </>
  )
}

export default Searchbar