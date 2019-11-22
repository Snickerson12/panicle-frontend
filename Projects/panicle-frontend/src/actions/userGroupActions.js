const API = 'http://localhost:3000/user_groups'

export const POST_USER_GROUP = 'POST_USER_GROUP';

export const postUserGroup = user_group => ({ type: POST_USER_GROUP, user_group })

export const createUserGroup = (user_group) => {
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
            dispatch(postUserGroup(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}