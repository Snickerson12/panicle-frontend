const API = 'http://localhost:3000/users'

export const POST_USER = 'POST_USER';

export const postUser = user => ({ type: POST_USER, user })

export const createUser = (newUser) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
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
            localStorage.setItem('token', data.jwt)
            dispatch(postUser(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}