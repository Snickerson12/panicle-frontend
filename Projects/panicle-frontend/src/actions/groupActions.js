const API = 'http://localhost:3000/groups'
const UG_API = 'http://localhost:3000/user_groups'

export const POST_GROUP = 'POST_GROUP';
export const POST_USER_GROUP = 'POST_USER_GROUP';

export const postGroup = group => ({ type: POST_GROUP, group });
export const postUserGroup = user_group => ({ type: POST_USER_GROUP, user_group })


export const createGroup = (group, user) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    group
                })
            })
            
            const data = await resp.json()
            console.log(data)
            const ug_resp = await fetch(UG_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user,
                    group_id: data.group.id
                })
            })
            let ug_data = await ug_resp.json()
            dispatch(postUserGroup(ug_data))
            dispatch(postGroup(data.group))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_GROUP = 'FETCH_GROUP'
export const fetchGroup = group => ({ type: FETCH_GROUP, group})

export const getGroup = (user) => {
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            const filteredGroups = data.filter(group => {
                let groupName = group.users.map(group => {
                    return group.username
                })
                return groupName == user
            })
            console.log(filteredGroups)
            dispatch(fetchGroup(filteredGroups))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}