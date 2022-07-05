import { Avatar } from '@mui/material';
import React from 'react';
import './YouVideos.css';

const YouVideos = ({image, title, channel, views, timestamp, channelimage}) => {
  return (
    <div className='youvideos'>
        <div className='container'>
            
        <div className='youvideos_img'>
        <img src={image} alt=""/>
        
        </div>

        <div className='youvideos_info'>
            <div className='youvideos_avat'>
                <Avatar className='youvid_avatar' alt={channel} src={channelimage} />
                
            </div>

            <div className='youvideo_texts'>
            <h4>{title}</h4>
            <span>{channel}</span>
            <p>{views}.{timestamp}</p>

            </div>

        </div>
        </div>

        





    </div>
  )
}

export default YouVideos