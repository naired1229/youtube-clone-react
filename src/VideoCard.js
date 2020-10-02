import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar';


function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image}/>
            <div className="videoCard_info">
                <Avatar 
                    className="videoCard_avatar" 
                    alt={channel} 
                    src={channel}
                />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} &#8226; {timestamp}
                    </p>
                </div>
            
            </div>
        </div>
    )
}

export default VideoCard
