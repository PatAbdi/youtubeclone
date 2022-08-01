import React from 'react';
import './WatchComments.css';
import { Avatar } from '@mui/material';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const Watchcom = ({ChannelImage,Comments,Channel,Likes,Subscribers}) => {
  return (
    <div className='watchdvideo-comments'>

      <div className='wachvid-com-sub'>
      <div className='watchcom_avat'>
                <Avatar className='youvid_avatar' alt={Channel} src={ChannelImage} />
                
         </div>

         <div className='watchcom-title'>
        <span>{Channel}</span>
        <span className='watchcom-title-subs'>{Subscribers}</span>
        </div>

        <div className='watchvid-sub-btn'>
          <button>Subscribe</button>

        </div>

      </div>

      <div className='watchvid-com'>

      </div>
      

      

    </div>
  )
}

export default Watchcom