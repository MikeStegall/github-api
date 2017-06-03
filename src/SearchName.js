import React from 'react'

function SearchUserName () {
  return (
    <div className='search-user-name'>
      <input type='text' name='username' placeholder='Enter GitHub Username' />
      <br />
      <button type='button' className='btn-search-name'>Search User Name</button>
    </div>
  )
}

export default SearchUserName
