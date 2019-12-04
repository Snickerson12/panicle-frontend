const API = 'http://localhost:3000/photos'

export const POST_PHOTO = 'POST_PHOTO';
export const postPhoto = photo => ({ type: POST_PHOTO, photo })

export const uploadPhoto = (photoData) => {
    return async dispatch => {
        try {
            const resp = await fetch(API, {
                method: 'POST',
                body: photoData,
                contentType: false
            })
            const data = await resp.json()
            dispatch(postPhoto(data))

        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

export const FETCH_PHOTOS = 'FETCH_PHOTO'
export const fetchPhotos = photo => ({type: FETCH_PHOTOS, photo})

export const getPhoto = (groupId) => {
    const groupID = parseInt(groupId)
    return async dispatch => {
        try {
            const resp = await fetch(API)
            const data = await resp.json()
            const filteredPhotos = data.filter( photos => {
                return photos.group_id === groupID
            })
            dispatch(fetchPhotos(filteredPhotos))
        } catch (error) {
            console.error('Error fetching', error)
        }
    }
}

//localhost:3000 + photo file url - this.props.photo_file