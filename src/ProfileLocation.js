import React from 'react'

function ProfileLocation (props) {
  return (
    <div className='location'>
      <h3>Location</h3>
      <p>{props.location}</p>
    </div>
  )
}

export default ProfileLocation
