import React from 'react'

function Feedback (input) {
  return (
    <div className='wrapper'>
      <div className='avatar'>
        <h1>{input}</h1>
        <img src='https://avatars1.githubusercontent.com/u/583231?v=3&s=460' alt='github user' />
      </div>
    </div>
  )
}

export default Feedback
