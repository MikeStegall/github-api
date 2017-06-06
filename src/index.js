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

let gitHubData

let loadingState = {
  isLoading: true,
  userFound: false,
  dataReceived: false
}

function fetchGitHubData (data) {
  gitHubData = data
  loadingState.isLoading = false
  loadingState.userFound = true
  loadingState.dataReceived = true
  renderNow()
}

function UserNotFound () {
  loadingState.isLoading = false
  loadingState.userFound = false
  loadingState.dataReceived = true
  return (
    <div className='avatar'>
      <p>User Not Found</p>
      <img src='https://avatars1.githubusercontent.com/u/583231?v=3&s=460' alt='github user' />
    </div>
  )
}

function FetchGitHubName (userName) {
  const GITHUBURL = `https://api.github.com/users/` + userName + _token
  $.getJSON(GITHUBURL).done(fetchGitHubData).fail(UserNotFound)
  renderNow()
}
class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleClick (event) {
    let userName = this.state.value
    loadingState.isLoading = true
    FetchGitHubName(userName)
  }

  render () {
    return (
      <div className='search-user-name'>
        <input type='text' placeholder='GitHub Username' value={this.state.value} onChange={this.handleChange} />
        <input onClick={this.handleClick} type='submit' value='Search User' className='btn-search-name' />
      </div>
    )
  }
}

FetchGitHubName('MikeStegall')

function RenderHTML (props) {
  if (loadingState.isLoading) {
    let input = 'loading'
    if (loadingState.userFound) {
      input = 'User Not Found'
      return (
        <div className='loading'>
          {Feedback(input)}
          <Search />
        </div>
      )
    }
    return (
      <div className='loading'>
        {Feedback(input)}
        <Search />
      </div>
    )
  } else {
    return (
      <div className='component'>
        {GitHubName(props)}
        {GitHubPic(props)}
        {ProfileLinks(props)}
        {ProfileLocation(props)}
        {IsHireable(props)}
        <Search />
      </div>
    )
  }
}
function App () {
  return RenderHTML(gitHubData)
}
function renderNow () {
  ReactDOM.render(App(), document.getElementById('root'))
}
renderNow()
