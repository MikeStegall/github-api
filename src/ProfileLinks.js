import React from 'react'

function ProfileLinks (profile, blog) {
  return (
    <div className='profile-links'>
      <a href={profile} target='_blank' className='github-link' rel='noopener noreferrer'>GitHub Profile</a>
      <a href={blog} target='_blank' className='blog-link' rel='noopener noreferrer'>Blog</a>
    </div>
  )
}

export default ProfileLinks
