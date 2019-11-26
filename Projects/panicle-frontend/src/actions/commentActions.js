const API = 'http://localhost:3000/comments'

export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = comment => ({ type: CREATE_COMMENT, comment });


export const newComment = (comment) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    comment
                })
            })
            const data = await resp.json()
            console.log('create comment resp', data)
            dispatch(createComment(data.comment))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const fetchComments = comment => ({ type: FETCH_COMMENTS, comment})

export const getComments = (postId) => {
    console.log('get comment postId', postId)
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            console.log('get comment response data', data)
            const filteredComments = data.filter(comment => {
                return comment.post_id === postId
            })
            dispatch(fetchComments(filteredComments))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}