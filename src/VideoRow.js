import React from 'react'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import './VideoRow.css';
function VideoRow({views, subs, description, timestamp, channel, title, image, verified}) {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_channel">
                    {channel} {verified && <CheckCircleSharpIcon className="verifiedIcon"/>}
                </p>
                <p className="videoRow_details">
                    {views} &#8226; {timestamp}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
