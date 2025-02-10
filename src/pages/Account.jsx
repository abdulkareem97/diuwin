import React from 'react'
import '../css/pageAccountba.css'
import '../css/account.css'
import LoadingComponent from '../components/LoadingComponent'
import UserInfoComponent from '../components/UserInfoComponent'

const Account = () => {
  return (
    <div id="app" data-v-app="">
      <LoadingComponent />
      <UserInfoComponent />
      
    </div>
  )
}

export default Account
