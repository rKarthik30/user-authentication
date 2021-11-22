import React from 'react';
import {useSelector} from 'react-redux'

const Account = (props) => {
  const user = useSelector((state) => {
    return state.user
  })
  // console.log('acc',user);
  return(
    <div>
      <h2>User Account</h2>
      <p> Email - {user.data.email}</p>
      <p>Username - {user.data.username}</p>
    </div>
  )
}

export default Account