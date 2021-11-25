import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {startAccount} from '../actions/userAction'

const Account = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })

  dispatch(startAccount())

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