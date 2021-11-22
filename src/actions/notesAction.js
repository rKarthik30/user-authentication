import axios from 'axios'
export const startNew = (newNote) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',newNote,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
            .then((res) => {
                const result =res.data
                dispatch(addNew(result))
                dispatch(startListNotes(localStorage.getItem('token')))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}


export const addNew = (newNote) => {
    return {
        type : 'NEW_NOTE',
        payload : newNote
    }
}

export const startListNotes = (token) => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers:{
                'x-auth':token
            }})
            .then((response) => {
                const result = response.data;
                // console.log(result);
                dispatch(setNotes(result));
            })
            .catch((error) => {
                alert(error.message);
            })
    }
} 

export const setNotes = (notes) => {
    return{
        type:'SET_NOTES',
        payload:notes
    }
}

export const deleteSingleContent = (_id) => {
    return (dispatch) => {
        if(window.confirm('are you sure to remove')){
            axios.delete( `http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers:{
                    "x-auth":localStorage.getItem('token')
                }
            })
            .then((response) => {
                const result = response.data;
                // console.log(result);
                dispatch(removeItem(result._id));
            })
            .catch((error) => {
                alert(error.message);
            })
        }

    }
}

export const removeItem = (_id) => {
    return {
        type:'REMOVE_ITEM',
        payload:_id
    }
}

export const showSingleContent = (_id) => {
    return () => {
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data;
            // console.log(result);
            if(Object.keys(result).includes('errors')){
                alert(result.errors);
            }else{
                alert(result.title,result.body);
            }
        })

        .catch((error) => {
            alert(error.message);
        })
    }
}