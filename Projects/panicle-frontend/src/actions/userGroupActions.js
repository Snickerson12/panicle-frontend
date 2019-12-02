const API = 'http://localhost:3000/user_groups'

export const POST_USER_GROUP = 'POST_USER_GROUP';
export const postUserGroup = user_group => ({ type: POST_USER_GROUP, user_group })

export const createUserGroup = (user_group) => {
    console.log('create user group', user_group)
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    user_group: user_group
                })
            })
            const data = await resp.json()
            const userData = data.user_group
            dispatch(postUserGroup(userData))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_USER_GROUPS = 'FETCH_USER_GROUPS'
export const fetchUserGroups = user_group => ({type: FETCH_USER_GROUPS, user_group})

export const getUserGroups = (userId) => {
    console.log(userId)
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            const filteredUG = data.filter(g => {
                return g.user_id == userId
            })
            dispatch(fetchUserGroups(filteredUG))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}