import React from 'react';
import {useDispatch} from 'react-redux'
import {showSingleContent,deleteSingleContent} from '../../actions/notesAction'

const NotesItem = (props) => {
  const dispatch = useDispatch()
  const {_id,title,body} = props

  const handleShow = () => {
    dispatch(showSingleContent(_id))
  }

  const handleRemove = () => {
    dispatch(deleteSingleContent(_id))
  }

  return(
    <div>
      <articel className='mt-3 border border-info p-3'>
        <a href='#' onClick={handleShow}>
          <h2>{title}</h2>
          <p>{body}</p>
        </a>
        <div className="remove d-flex justify-content-end align-items-center">
          <a href="#">
              <i className="far fa-edit mr-5 text-success"></i>
          </a>
          <a href="#" onClick={handleRemove}>
              <i className="far fa-trash-alt text-danger"></i>
          </a>
        </div>
      </articel>
    </div>
  )
}

export default NotesItem