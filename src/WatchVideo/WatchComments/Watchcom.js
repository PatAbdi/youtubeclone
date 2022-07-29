import React from 'react';
import './WatchComments.css';
import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const Watchcom = ({ChannelImage,Comments,Channel,Likes}) => {
  return (
    <div className='watchdvideo-comments'>
      <div className='watchcom_avat'>
                <Avatar className='youvid_avatar' alt={Channel} src={ChannelImage} />
                
         </div>
      

      <div className='watchcom-title'>
        <span>{Channel}</span>
        <p>{Comments}</p>
        <ThumbUpOutlinedIcon className='like-icons' />  <span>{Likes}</span>
        <ThumbDownOffAltOutlinedIcon className='like-icons'/>

      </div>

    </div>
  )
}

export default Watchcom