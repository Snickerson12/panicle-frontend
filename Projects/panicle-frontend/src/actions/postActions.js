const API = 'http://localhost:3000/posts'

export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const createPost = post => ({ type: CREATE_POST, post });
export const deletePost = post => ({ type: DELETE_POST, post })

export const removePost = (post) => {
    return async dispatch => {
        try {
            const resp = await fetch(API+ '/' + post, {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json'
                }
            }) 
            console.log(post)
            dispatch(deletePost(post))
                
        } catch (error) {
            console.error('Error fetching', error)
        }
    } 
}


export const newPost = (postContent) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    post: postContent
                })
            })
            const data = await resp.json()
            console.log(data)
            dispatch(createPost(data.post))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_POSTS = 'FETCH_POSTS'
export const fetchPost = post => ({ type: FETCH_POSTS, post})

export const getPost = (groupId) => {
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            console.log('get post response data', data)
            const filteredPosts = data.filter(post => {
                return post.group_id == groupId
            })
            dispatch(fetchPost(filteredPosts))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const getSinglePost = (selectedId) => {
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            const filteredPosts = data.filter(post => {
                return post.id == selectedId
            })
            dispatch(fetchPost(filteredPosts))
        } catch (error) {
            console.error('Error Fetching', error)
        }
    }
}
