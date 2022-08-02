import React from 'react';
import './WatchComments.css';
import { Avatar } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const Watchcom = ({ChannelImage,Comments,Channel,Likes,Subscribers,CommentNo}) => {
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
        <div className='watchvid-com-comno'>
          <span>Comments</span>
          <span className='watchvid-com-comnos'>{CommentNo}</span>
          </div>

          
      <div class="vl"></div>

      <div className='watchvid-com-subs'>
      <Avatar className='youvid_avatar' alt={Channel} src={ChannelImage} />

      <p>{Comments}</p>
      <KeyboardArrowRightOutlinedIcon/>



      </div>

        

      </div>
      

      

    </div>
  )
}

export default Watchcom