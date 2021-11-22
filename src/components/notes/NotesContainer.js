import React,{useEffect} from 'react';
import AddNotes from './AddNotes'
import NotesList from './NotesList'

const NotesContainer = (props) => {
  return(
    <div>
      <h2>My Notes</h2>
      <NotesList/>
      <AddNotes/>
    </div>
  )
}

export default NotesContainer