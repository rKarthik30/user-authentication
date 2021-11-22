import React,{useState} from 'react';

const NotesForm = (props) => {
    const {formSubmit} = props
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [formErrors,setFormErrors] = useState({})
    const errors = {}

    const handleChange = (e) =>{
        const atr = e.target.name
        const atr1 = e.target.value
        if(atr === 'title'){
            setTitle(atr1)
        }else if(atr === 'body'){
            setBody(atr1)
        }
    }

    const runValidations = () => {
        if(title.trim().length === 0){
            errors.title = 'Title cannot be blank'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                title,
                body
            }
            formSubmit(formData)
            setTitle('')
            setBody('')
        }else {
            console.log(errors);
            setFormErrors(errors)
        }
    }
  return(
    <div>
      <h2>AddNotes</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" value={title} name='title' placeholder="Enter Title" onChange={handleChange}/><br/>
          {formErrors.title && <span className='text-danger'> {formErrors.title} </span>}

          <textarea placeholder='Enter your Note' value={body} onChange={handleChange}></textarea> <br/>

          <input type='submit' value='save'/>
      </form>
    </div>
  )
}

export default NotesForm