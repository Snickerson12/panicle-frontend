import {createUserGroup} from './userGroupActions';

const API = 'http://localhost:3000'
const PENDING_USER_API = 'http://localhost:3000/pending_user_groups'

export const POST_PENDING_USER = 'POST_PENDING_USER';
export const postPendingUser = pending_user_group => ({ type: POST_PENDING_USER, pending_user_group })


export const createPendingUser = (groupId, userEmail) => {
    return async dispatch => {
        try {
            const resp = await fetch(API+'/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await resp.json()
            const filteredUsers = data.filter(user => {
                return user.email === userEmail
            })
            const group = parseInt(groupId)
            const pendingUserId = filteredUsers[0].id
            const pendingUser = {group_id: group, user_id: pendingUserId}
            const response = await fetch(PENDING_USER_API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    pending_user_group: pendingUser
                })
            })
            const pendingUserData = await response.json()
            const pendingUserObject = pendingUserData.pending_user_group
            dispatch(postPendingUser(pendingUserObject))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_PENDING_USER = 'FETCH_PENDING_USER';
export const fetchPendingUser = pending_user_group => ({ type: FETCH_PENDING_USER, pending_user_group })

export const getPendingUsers = (userId) => {
    return async dispatch => {
        try {
            const resp = await fetch(PENDING_USER_API)
            const data = await resp.json()
            const filteredPendingUser = data.filter(user => {
                return user.user_id === userId
            })
            dispatch(fetchPendingUser(filteredPendingUser))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const DELETE_PENDING_USER = 'DELETE_PENDING_USER';
export const deletePendingUser = pending_user_group => ({ type: DELETE_PENDING_USER, pending_user_group })

export const removePendingInvite = (pendingInviteId) => {
    return async dispatch => {
        try {
            const resp = await fetch(PENDING_USER_API + '/' + pendingInviteId, {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json'
                }
            }) 
            dispatch(deletePendingUser(pendingInviteId))
                
        } catch (error) {
            console.error('Error fetching', error)
        }
    } 
}

export const getSinglePending = (pendingInviteId) => {
    return async dispatch => {
        try {
            const resp = await fetch(PENDING_USER_API + '/' + pendingInviteId)
            const data = await resp.json()
            console.log('get single pending', data)
            const user_group = {user_id: data.user_id, group_id: data.group_id}
            dispatch(createUserGroup(user_group))
            dispatch(deletePendingUser(pendingInviteId))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}


