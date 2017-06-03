import React from 'react'

function IsHireable (props) {
  if (props.hireable) {
    return (
      <div className='hireable-status'>
        <h3>Hireable?</h3>
        <p>You can and should hire him.</p>
      </div>
    )
  } else {
    return (
      <div className='hireable-status'>
        <h3>Hireable?</h3>
        <p>He is curretnly not hirable.</p>
      </div>
    )
  }
}

export default IsHireable
