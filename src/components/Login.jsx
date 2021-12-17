import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'

import React from 'react'

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Uni-Chat!</h2>

        <div className='login-button google'>
          <GoogleOutlined />
          Sign In with Google
        </div>
        <br />
        <br />
        <div className='login-button facebook'>
          <FacebookOutlined />
          Sign In with Facebook
        </div>
      </div>
    </div>
  )
}
export default Login
