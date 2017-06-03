import React from 'react'

function SearchUserName () {
  return (
    <div className='search-user-name'>
      <input type='text' name='username' placeholder='Enter GitHub Username' />
      <br />
      <input type='submit' value='Search' className='btn-search-name' />
    </div>
  )
}

export default SearchUserName
