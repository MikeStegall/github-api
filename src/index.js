/* global $ */
import React from 'react'
import ReactDOM from 'react-dom'
import _token from './_token'
import GitHubPic from './GitHubPic.js'
import GitHubName from './GitHubName.js'
import IsHireable from './IsHireable.js'
import ProfileLinks from './ProfileLinks.js'
import ProfileLocation from './ProfileLocation.js'
import SearchUserName from './SearchName.js'

import './index.css'

const GITHUBURL = `https://api.github.com/users/MikeStegall` + _token

let mainObj

function fetchGitHubData (data) {
  mainObj = data
  renderNow()
}

function fetchFail () {
  console.log('fail')
}
$.getJSON(GITHUBURL).done(fetchGitHubData).fail(fetchFail)

function RenderHTML (props) {
  return (<div>
    {GitHubName(props)}
    {GitHubPic(props)}
    {ProfileLinks(props)}
    {ProfileLocation(props)}
    {IsHireable(props)}
    {SearchUserName()}
  </div>)
}
function App () {
  return RenderHTML(mainObj)
}
function renderNow () {
  ReactDOM.render(App(), document.getElementById('root'))
}
