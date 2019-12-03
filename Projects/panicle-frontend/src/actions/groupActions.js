import {postUserGroup} from './userGroupActions'

const API = 'http://localhost:3000/groups'
const UG_API = 'http://localhost:3000/user_groups'

export const POST_GROUP = 'POST_GROUP';
export const postGroup = group => ({ type: POST_GROUP, group });


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
            dispatch(postUserGroup(ug_data.user_group))
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
            const filteredGroups = data.filter(g => {
                let groupName = g.users.map(group => {
                    return group.username
                })
                return groupName == user
            })
            dispatch(fetchGroup(filteredGroups))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_SINGLE_GROUP = 'FETCH_SINGLE_GROUP'
export const fetchSingleGroup = single_group => ({type: FETCH_SINGLE_GROUP, single_group})

export const getSingleGroup = (groupId) => {
    return async dispatch => {
        try {
           
            const resp = await fetch(API)
            const data = await resp.json()
            const filteredGroups = data.filter(group => {
                return group.id == groupId
            })
            dispatch(fetchSingleGroup(filteredGroups))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}
