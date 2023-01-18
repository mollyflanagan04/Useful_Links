import React from 'react'
import './ResourceCard.css'

function SearchBar(props) {
  const onChange = (event) => props.handler(event.target.value);
  return (
    <div>
      <input className='search-bar' value={props.searchTerm} onChange={onChange} id="defaultValue" placeholder={props.default}/>
    </div>
  )
}
export default SearchBar