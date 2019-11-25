const API = 'http://localhost:3000/posts'

export const CREATE_POST = 'CREATE_POST';

export const createPost = post => ({ type: CREATE_POST, post });


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
            console.log('get post response id', groupId)
            const filteredPosts = data.filter(post => {
                return post.group_id == groupId
            })
            console.log('please work', filteredPosts)
            dispatch(fetchPost(filteredPosts))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}