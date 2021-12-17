import 'firebase/auth'

import firebase from 'firebase/app'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAADLkPAweAHZ6S5guIxCXPI9s64TxCztc',
    authDomain: 'uni-chat-c4523.firebaseapp.com',
    projectId: 'uni-chat-c4523',
    storageBucket: 'uni-chat-c4523.appspot.com',
    messagingSenderId: '1016623529164',
    appId: '1:1016623529164:web:6c260454851baab6f01669',
  })
  .auth()
