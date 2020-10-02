import React from 'react';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TheatersIcon from '@material-ui/icons/Theaters';

import './Sidebar.css';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            {/* <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/> */}
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
            {/* <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/> */}
            <hr/>
            <h4>SUBSCRIPTIONS</h4>
            <SidebarRow Icon={MusicNoteOutlinedIcon} title="Music"/>
            <SidebarRow Icon={SportsSoccerOutlinedIcon} title="Sports"/>
            <SidebarRow Icon={SportsEsportsIcon} title="Gaming"/>
            <SidebarRow Icon={TheatersIcon} title="Movies"/>
        </div>
    )
}

export default Sidebar
