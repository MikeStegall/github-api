import React from 'react'

function ProfileLinks (props) {
  return (
    <div className='profile-links'>
      <a href={props.html_url} target='_blank' className='github-link' rel='noopener noreferrer'>GitHub Profile</a>
      <a href={props.blog} target='_blank' className='blog-link' rel='noopener noreferrer'>Blog</a>
    </div>
  )
}

export default ProfileLinks
