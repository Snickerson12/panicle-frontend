const API = 'http://localhost:3000/groups'

export const POST_GROUP = 'POST_GROUP';

export const postGroup = group => ({ type: POST_GROUP, group })

export const createGroup = (group) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    group: group
                })
            })
            const data = await resp.json()
            console.log(data)
            dispatch(postGroup(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}