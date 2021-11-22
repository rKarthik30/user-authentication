import React,{useState} from 'react';
import validator from 'validator'
import {startRegister} from '../actions/userAction'
import {useDispatch} from 'react-redux'

const Register = (props) => {
  const [userName, setUserName] =  useState('')
  const [ email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors,setFormErrors] = useState({})
  const errors = {}

  const dispatch = useDispatch()

  const handleChange=(e)=>{
    const atr = e.target.name
    if(atr === 'name') {
      setUserName(e.target.value)
    } else if(atr === 'email') {
      setEmail(e.target.value)
    } else if (atr === 'password'){
      setPassword(e.target.value)
    }
  }

  const runValidator = () => {
    if(userName.trim().length === 0){
      errors.userName = 'Name cannot be blank'
    }
    if(email.trim().length === 0){
      errors.email = 'Email cannot be blank'
    }else if(!validator.isEmail(email)){
      errors.email = 'Invalid email address'
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    runValidator()
    if(Object.keys(errors).length === 0){
      setFormErrors({})
      const data= {
        username : userName,
        email : email,
        password: password
      }
      // console.log(data)
      dispatch(startRegister(data,props))

      setUserName('')
      setPassword('')
      setEmail('')
    }else{
      console.log(errors);
      setFormErrors(errors)
    }
    
    
  }
  return(
    <div>
      Registeration Form
      <form onSubmit={handleSubmit} >
        <label>User name</label> 
        <input type='text' value={userName} name='name' onChange={handleChange} /> <br/>
        {formErrors.userName && <span>{formErrors.userName}</span>}<br/>
        <label>Email</label>
        <input type='text' value={email} name='email' onChange={handleChange} /> <br/>
        {formErrors.email && <span>{formErrors.email}</span>}<br/>
        <label>password</label>
        <input type='text' value={password} name='password' onChange={handleChange} /> <br/>
        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register