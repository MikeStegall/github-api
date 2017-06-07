import React from 'react'

function GitHubPic (picture, bio) {
  return (
    <div className='picture-bio'>
      <img className='github-picture' src={picture} alt='Github Pic' />
      <p>{bio}</p>
    </div>
  )
}
export default GitHubPic
