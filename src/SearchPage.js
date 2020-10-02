import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon className="searchPage_tuneIcon" />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJww2FYS1pYFkkxPpgC_xe7ZHqeMhL8IOLJ7-bZSHw=s100-c-k-c0xffffffff-no-rj-mo"
                channel="Wish 107.5"
                verified
                subs="9.61M subscribers"
                noOfVideos={1154}
                description="Wish 107.5 is an all-hits FM radio station in the Philippines. When it first hit the airwaves in August 2014, it promised to grant your fervent wish of making your radio more than a typical music-box-on-air. Wish 107.5 unveiled the first and the only Mobile Radio Booth in the Philippines, now known as the WISH 107.5 Bus. Equipped with state-of-the-art broadcast facilities, it took the traditional radio experience beyond the four-walled booth as it brought music..."
            />
            <hr/>
            <h3>Wishclusives</h3>
            <p>Go ahead, indulge! All your favorite Wishclusives in one playlist.</p>
            <div className="searchPage_videoPlaylist">
                <VideoRow 
                    views="38K views"
                    timestamp="1 day ago"
                    channel="Wish 107.5"
                    title='Ryle Santiago performs "Iniismol" LIVE on Wish 107...'
                    image="https://img.youtube.com/vi/fYiBBDVT3Z0/maxresdefault.jpg"
                    verified
                />
                <VideoRow
                    views="99K views"
                    timestamp="2 day ago"
                    channel="Wish 107.5"
                    title='The Juans, Janine Tenoso perform "BTNS (Bakit Ito...'
                    image="https://img.youtube.com/vi/4ctZdrfe5KE/maxresdefault.jpg"
                    verified
                />
                <VideoRow
                    views="104K views"
                    timestamp="6 day ago"
                    channel="Wish 107.5"
                    title='Munimuni performs "Sa Hindi Pag-alala" LIVE on Wish...'
                    image="https://img.youtube.com/vi/oHrv3WNhneQ/maxresdefault.jpg"
                    verified
                />
                <VideoRow
                    views="52K views"
                    timestamp="1 week ago"
                    channel="Wish 107.5"
                    title='Ethan Loukas performs "Manghuhula" LIVE on Wish...'
                    image="https://img.youtube.com/vi/A7wS7nLT_gw/maxresdefault.jpg"
                    verified
                />
            </div>
            <hr/>
        </div>
    )
}

export default SearchPage
