import React from 'react'
import './ChannelRow.css'
import Avatar from '@material-ui/core/Avatar';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
function ChannelRow({image, channel,subs,noOfVideos,description,verified}) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow_logo" 
                alt={channel} 
                src={image}
            />
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleSharpIcon/>}</h4>
                <p>
                    {subs} subscribers &#8226; {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
