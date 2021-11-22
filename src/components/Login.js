import React,{useState} from 'react';
import validator from 'validator'
import {useSelector,useDispatch} from 'react-redux'
import {startLogin} from '../actions/userAction'

const Login = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [formErrors,setFormErrors] = useState({})
  const errors = {} 
  const user = useSelector((state) => {
    return state.user
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const atr = e.target.name
    if(atr === 'email'){
      setEmail(e.target.value)
    }else if(atr === 'password'){
      setPassword(e.target.value)
    }
  }

  const runValidator = () => {
    if(email.trim().length === 0){
      errors.email = 'Email cannot be blank'
    }else if(!validator.isEmail(email)){
      errors.email = 'Invalid email address'
    }
    if(password.trim().length === 0){
      errors.password = 'Password cannot be blank'
    }
  }

  const loginAuth = () => {
    return !user.isLoading
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runValidator()
    if(Object.keys(errors).length === 0){
      setFormErrors({})
      const loginFormData = {
        email: email,
        password : password
      }
      // console.log(loginFormData);
      dispatch(startLogin(loginFormData,loginAuth,props))
      setPassword('')
      setEmail('')
    }else{
      // console.log('line 54',errors);
      setFormErrors(errors)
    }
  }
  return(
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your email' name='email' onChange={handleChange}/><br/>
        <input type="text" placeholder='Enter your password' name='password' onChange={handleChange}/><br/>

        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login