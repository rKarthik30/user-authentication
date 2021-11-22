import axios from 'axios'

export const startRegister = (formData,props) => {
    return (dispatch) => {
        axios.post("http://dct-user-auth.herokuapp.com/users/register",formData)
            .then((res) => {
                const result = res.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                    // console.log(result);
                } else {
                    alert('Registration successfull!!!')
                    props.history.push('/login')
                }
            })
            // .catch((err) =>{
            //     alert(err.message)
            // })
   }
}   

export const startLogin = (loginFormData,loginAuth,props) => {
    return (dispatch) => {
        axios.post("http://dct-user-auth.herokuapp.com/users/login",loginFormData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else {
                    alert('Successfully logged in')
                    localStorage.setItem('token',result.token)
                    props.history.push("/")
                    const toggle = loginAuth()
                    // console.log(toggle);
                    startAccount()
                    dispatch(startToggle(toggle))
                }
            })
    } 
}

export const startToggle = (toggle) => {
    return {
        type:'LOGGED_IN', 
        payload:toggle
    }
}

export const startAccount = () => {
    return (dispatch) => {
        axios.get("http://dct-user-auth.herokuapp.com/users/account", {
            headers: {
                'x-auth' : localStorage.getItem('token') 
            }
        })
        .then((response) => {
            const result = response.data
            // console.log('line59',result);
            dispatch(startUserAccount(result))
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const startUserAccount = (data) => {
    return {
        type:"USER_DATA",
        payload:data
    }
} 

export const startLogout = (props,logoutAuth) => {
    return (dispatch) => {
        alert('Successfully logged out')
        localStorage.removeItem('token')
        props.history.push("/")
        const toggle = logoutAuth()
        // console.log('line80', toggle);
        dispatch(startLogoutToggle(toggle))
    }
}

export const startLogoutToggle = (toggle) => {
    return {
        type:'LOGGED_OUT', 
        payload:toggle
    }
}