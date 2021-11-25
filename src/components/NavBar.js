import React from 'react';
import {withRouter} from 'react-router-dom'
import {Link,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Home from './Home'
import Register from './Register'
import Login  from './Login'
import Account from './Account'
import NotesContainer from './notes/NotesContainer'
import {startLogout} from '../actions/userAction'

const NavBar = (props) => {
  const user = useSelector((state) => {
    return state.user
  })
  const dispatch = useDispatch()

  // console.log(('navbar', user.isLoading));

  const logoutAuth = () => {
    // console.log("line20",user);
    return !user.isLoading
  }

  return(
    <div>
      <Link to='/'>Home</Link> |
      {user.isLoading ? (
        <>
          <Link to='/account'>Account</Link> |
          <Link to='/notes'>Notes</Link> |
          <Link to="#" onClick={(e) => {
            e.preventDefault()
            dispatch(startLogout(props,logoutAuth))
            localStorage.clear()
          }}>Logout</Link>
        </>
      ):(
        <>
          <Link to='/register'>Register</Link> | 
          <Link to='/login'>Login</Link>
        </>
      )}
      
        <Route path='/' component={Home} exact />
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/account' component={Account}/>
        <Route path='/notes' component={NotesContainer}/>
      
    </div>
  )
}

export default withRouter(NavBar)