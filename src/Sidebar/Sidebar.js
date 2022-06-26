import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Sidebar = () => {
  return (
    
      
    <div className='sidebar'>
  <Scrollbars style={{width:300, height: 900}}>
      <div>

      
       <SidebarRow selected Icon={HomeIcon} title = "Home" />
       <SidebarRow Icon={WhatshotIcon} title = "Trending" />
       <SidebarRow Icon={SubscriptionsIcon} title = "Subscriptions" />
        <hr/>

        <SidebarRow Icon={VideoLibraryIcon} title = "Library" />
       <SidebarRow Icon={HistoryIcon} title = "History" />
       <SidebarRow Icon={WatchLaterIcon} title = "Watch Later" />
       <SidebarRow Icon={MusicVideoIcon} title = "Your Videos" />
       <SidebarRow Icon={PlaylistPlayIcon} title = "Playlists" />
       <SidebarRow Icon={ExpandMoreIcon} title = "Show More" />

       <hr/>

<div className='sidebar_sub'>
    <h2>Subscriptions</h2>
<SidebarRow Icon={VideoLibraryIcon} title = "Spinning Records" />
<SidebarRow Icon={HistoryIcon} title = "Trap Nation" />
<SidebarRow Icon={WatchLaterIcon} title = "Afrojack" />
<SidebarRow Icon={MusicVideoIcon} title = "AniTV" />
<SidebarRow Icon={PlaylistPlayIcon} title = "Camp KeyFrame" />
<SidebarRow Icon={ExpandMoreIcon} title = "Chris Brown" />
<SidebarRow Icon={ExpandMoreIcon} title = "Show  69 More" />
</div>


<hr/>

<div className='sidebar_more'>

    <h2>more from youtube</h2>

<SidebarRow Icon={SportsEsportsOutlinedIcon} title = "Gaming" />
<SidebarRow Icon={StreamOutlinedIcon} title = "Live" />
<SidebarRow Icon={EmojiEventsOutlinedIcon} title = "Sports" />
</div>

<hr/>

<SidebarRow Icon={SettingsOutlinedIcon} title = "Settings" />
<SidebarRow Icon={FlagOutlinedIcon} title = "Report History" />
<SidebarRow Icon={HelpOutlineOutlinedIcon} title = "Help" />
<SidebarRow Icon={FeedbackOutlinedIcon} title = "Send Feedback" />

<hr/>


<div className='sidebar_copyrights'>
    <div className='sidebar_copyrights_1'>
    <span>About</span>
    <span>Press</span>
    <span>CopyRight</span>
    </div>


<div className='sidebar_copyrights_1'>
<span>Contact Us</span>
<span>Creators</span>
</div>

<div className='sidebar_copyrights_1'>
<span>Advertise</span>
<span>Developers</span>
</div>

<div className='sidebar_copyrights_1'>
<span>Terms</span>
<span>Privacy</span>
<span>Policy and Safety</span>
</div>

<div className='sidebar_copyrights_2'>

<span>How Youtube Works</span>
<span>Test new Features</span>
</div>


<span className='sidebar_copyrights_3'>@copy 2022 Google LLC</span>

</div>

 </div>
 </Scrollbars>
 </div>
 
  )
}

export default Sidebar