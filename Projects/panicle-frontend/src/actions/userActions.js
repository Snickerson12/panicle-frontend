const API = 'http://localhost:3000'

export const POST_USER = 'POST_USER';

export const postUser = user => ({ type: POST_USER, user })

export const createUser = (newUser) => {
    return async dispatch => {
        try {
            const resp = await fetch(API+'/users', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user: newUser
                })
            })
            const data = await resp.json()
            localStorage.setItem('token', data.jwt)
            dispatch(postUser(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

const authAPI = 'http://localhost:3000/auth'

export const getUser = (potentialUser) => {
    console.log(potentialUser)
    return async dispatch => {
        try {
            const resp = await fetch(authAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(potentialUser)
            })
            const data = await resp.json()
            console.log(data)
            localStorage.setItem('token', data.jwt)
            dispatch(postUser(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const loggedIn = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        try {
            fetch(authAPI, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch(postUser(data))
            })

        } catch(error) {
            console.error('Error fetching user', error)
        }
    }    
}

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = currentUser => ({ type: LOGOUT_USER, currentUser })

export const UPDATED_USER = 'UPDATED_USER';
export const updatedUser = user => ({ type: UPDATED_USER, user })

export const updateUser = (initialUser, newUser) => {
    const user = initialUser.username
    return async dispatch => {
    const token = localStorage.getItem('token')
        try {
            const resp = await fetch(API+'/users/'+`${user}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            const data = await resp.json()
            dispatch(updatedUser(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }

}
