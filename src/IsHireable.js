import React from 'react'

function IsHireable (hireable) {
  let hireableText = 'No'
  if (hireable) hireableText = 'Yes'

  return (
    <div className='hireable-status'>
      <h3>Hireable?</h3>
      <p>{hireableText}</p>
    </div>
  )
}

export default IsHireable
