import React from 'react'

function GitHubPic (props) {
  return (
    <div className='picture-bio'>
      <img className='github-picture' src={props.avatar_url} alt='Github Pic' />
      <p>{props.bio}</p>
    </div>
  )
}
export default GitHubPic
