import React, {  } from 'react'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => console.log(result)).catch((error) => console.log(error.message));
    }
    
    return (
        <>
        <div className="login">
            <div className="login__container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" alt="" />
              <div className="login__text">
                  <h1>Sign in to WhatsApp</h1>
              </div>
              <Button onClick={signIn}>
                  Sign in with Google
              </Button>
                
            </div>
            </div>
        </>
    )
}

export default Login
