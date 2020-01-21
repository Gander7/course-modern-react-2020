import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID a54e9ce92b57deb4c5318155a5b76606775e68a43e7ac3dc1fde84fc3836f5f5'
    }
})