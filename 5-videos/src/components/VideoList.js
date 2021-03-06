import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const list = videos.map((v) => {
        return (
            <VideoItem 
                key={v.id.videoId} 
                video={v} 
                onVideoSelect={onVideoSelect} 
            />
        )
    })

    return (
        <div className="ui relaxed divided list">
            {list}
        </div>
    )
}

export default VideoList