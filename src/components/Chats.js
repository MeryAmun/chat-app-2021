import { ChatEngine } from 'react-chat-engine'
import React from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'

const Chats = () => {
  const history = useHistory

  const handleLogout = async () => {
    await auth.signOut()
    history.push('/')
  }
  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>Unichat</div>
        <div className='logout-tab' onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height='calc(100vh-66px)'
        projectId='3c2a391c-c007-43a9-b966-c4c832fb7798'
        userName='.'
        userSecret='.'
      />
    </div>
  )
}
export default Chats
