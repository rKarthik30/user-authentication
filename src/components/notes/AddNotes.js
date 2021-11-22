import React from 'react'
import {useDispatch} from 'react-redux'
import NotesForm from './NotesForm'
import {startNew} from '../../actions/notesAction'

const AddNotes = (props) => {
    const dispatch = useDispatch()

    const formSubmit = (data) => {
        dispatch(startNew(data))
    }
  return(
    <div>
      <NotesForm formSubmit={formSubmit}/>
    </div>
  )
}

export default AddNotes