/* global $ */
import React from 'react'
import ReactDOM from 'react-dom'
import _token from './_token'
import GitHubPic from './GitHubPic.js'
import GitHubName from './GitHubName.js'
import IsHireable from './IsHireable.js'
import ProfileLinks from './ProfileLinks.js'
import ProfileLocation from './ProfileLocation.js'
import Feedback from './Feedback.js'
import './index.css'

const initialState = {
  isLoading: true,
  profileData: null,
  username: '',
  userexist: false
}

window.appState = initialState

function fetchProfileSuccess (data) {
  window.appState.isLoading = false
  window.appState.profileData = data
  window.appState.userexist = true
}

function fetchProfileFail () {
  window.appState.isLoading = false
  window.appState.profileData = ''
  window.appState.userexist = false
}

function fetchProfile (username) {
  const GITHUB_URL = `https://api.github.com/users/` + username + _token
  $.getJSON(GITHUB_URL).done(fetchProfileSuccess)
                       .fail(fetchProfileFail)
}

function onKeyPress (key) {
  if (key.charCode === 13) {
    clickSearchButton()
  }
}

function onChange (evt) {
  window.appState.username = evt.target.value
}
function clickSearchButton () {
  fetchProfile(window.appState.username)
}

function Search () {
  return (
    <div className='search-user-name'>
      <input className='github-search-username' type='text'
        placeholder='GitHub Username'
        onChange={onChange}
        onKeyPress={onKeyPress} />
      <input onClick={clickSearchButton} type='submit' value='Search User' className='btn-search-name' />
    </div>
  )
}

fetchProfile('MikeStegall')
function LoadingPage () {
  return <h1>Loading…</h1>
}

function UserPage (profileData) {
  return (
    <div className='component'>
      <header><h1>GitHub Username Search</h1></header>
      {GitHubName(profileData.name)}
      {GitHubPic(profileData.avatar_url, profileData.bio)}
      {ProfileLinks(profileData.html_url, profileData.blog)}
      <div className='location-hireable'>
        {ProfileLocation(profileData.location)}
        {IsHireable(profileData.hireable)}
      </div>
      {Search()}
    </div>
  )
}

function App (appState) {
  if (appState.isLoading) {
    return LoadingPage()
  } else if (!appState.userexist) {
    return (
      <div className='component'>
        {Feedback()}
        {Search()}
      </div>
    )
  } else {
    return UserPage(appState.profileData)
  }
}

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(window.appState), rootEl)
  window.requestAnimationFrame(renderNow)
}
window.requestAnimationFrame(renderNow)
