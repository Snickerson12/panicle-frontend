const API = 'http://localhost:3000/users'
export const FETCH_USERS = 'FETCH_USERS';

export const getUsers = users => ({ type: FETCH_USERS, users})

export const fetchUsers = () => {
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            dispatch(getUsers(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}