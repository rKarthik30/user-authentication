import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import NotesItem from './NotesItem'
import {startListNotes} from '../../actions/notesAction'

const Noteslist = (props) => {
    const notes = useSelector((state) => {
        return state.notes
    })
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(startListNotes())
    },[])


  return(
    <div>
        <h3>My Notes - {notes.length}</h3>
        {notes.length === 0 ? (
            <p>No notes Found - Add your First Note</p>
        ):(
            <>
                {notes.map((ele) => {
                    return <NotesItem key={ele._id} {...ele}/>
                })}
            </>
        )}
        <NotesItem/>
    </div>
  )
}

export default Noteslist