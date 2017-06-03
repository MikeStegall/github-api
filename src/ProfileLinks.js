import React from 'react'

function ProfileLinks (props) {
  return (
    <div className='profile-links'>
      <a href={props.html_url} target='_blank' className='github-link'>GitHub Profile</a>
      <a href={props.blog} target='_blank' className='blog-link'>Blog</a>
    </div>
  )
}

export default ProfileLinks
