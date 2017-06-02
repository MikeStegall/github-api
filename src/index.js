/* global $ */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const GITHUBURL = `https://api.github.com/users/MikeStegall?access_token=13de576543649a783bca7cf4db97b9e5ba5ab917`

let mainObj

function fetchGitHubData (data) {
  mainObj = data
  renderNow()
}

function fetchFail () {
  console.log('fail')
}
$.getJSON(GITHUBURL).done(fetchGitHubData).fail(fetchFail)

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
function GitHubName (props) {
  return (
    <header><h1>{props.name}</h1></header>
  )
}
function GitHubPic (props) {
  return (
    <div className='picture-bio'>
      <img className='github-picture' src={props.avatar_url} alt='Github Pic' />
      <p>{props.bio}</p>
    </div>
  )
}
function ProfileLinks (props) {
  return (
    <div className='profile-links'>
      <a href={props.html_url} target='_blank' className='github-link'>GitHub Profile</a>
      <a href={props.blog} target='_blank' className='blog-link'>Blog</a>
    </div>
  )
}
function Location (props) {
  return (
    <div className='location'>
      <h3>Location</h3>
      <p>{props.location}</p>
    </div>
  )
}
function App () {
  return (
    <div>
      {GitHubName(mainObj)}
      {GitHubPic(mainObj)}
      {ProfileLinks(mainObj)}
      {Location(mainObj)}
      {IsHireable(mainObj)}
    </div>
  )
}
function renderNow () {
  ReactDOM.render(App(), document.getElementById('root'))
}
