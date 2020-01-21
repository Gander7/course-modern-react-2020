import axios from 'axios'

const KEY = 'AIzaSyAJOgRcIYFf0Faf0hE5fNxeqk4RY_QQxMg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})

