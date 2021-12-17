import React, { useEffect, useRef, useState } from 'react'

import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Chats = () => {
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const { user } = useAuth()

  const handleLogout = async () => {
    await auth.signOut()
    history.push('/')
  }

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()
    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' })
  }

  useEffect(() => {
    if (!user) {
      history.push('/')
      return
    }
    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '3c2a391c-c007-43a9-b966-c4c832fb7798',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        let formData = new formData()
        formData.append('email', user.email)
        formData.append('username', user.displayName)
        formData.append('secret', user.uid)

        getFile(user.photoUrl).then((avatar) => {
          formData.append('avatar', avatar, avatar.name)
          axios
            .post('https://api.chatengine.io/users', formData, {
              headers: {
                'private-key': '2f04bf2b-7748-4b4b-80c0-f7a37a24ee27',
              },
            })
            .then(() => {
              setLoading(false)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
  }, [user, history])

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
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}
export default Chats
