import React from 'react';
import './WatchComments.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';

const WatchComments = ({Title,Views,ChannelImage,Timestamp,Channel,Share,Save,
    Report,Likes,Comments}) => {
  return (
    <div className='watchcomments'>
        <div className='watchvideo-details'>
            <span>{Title}</span>

            <div className='watchvid-det-views-likes'>
                <div className='watchvid-det-views'>
                    <span>{Views}</span>
                    <span>{Timestamp}</span>

                </div>

                <div className='watchvid-det-likes'>
                  <div className='watchvid-det-likes-icons'>
                    <div className='likes-icon'>
                    <ThumbUpOutlinedIcon className='like-icons' /> 
                    <span>{Likes}</span>
                    </div>
                  
                  <ThumbDownOffAltOutlinedIcon className='like-icons'/>
                  <ReplyOutlinedIcon className='like-icons'/>
                  <ContentCutOutlinedIcon className='like-icons'/>
                  <PlaylistAddOutlinedIcon className='like-icons'/>
                  <OutlinedFlagSharpIcon className='like-icons'/>
                  </div>
                

                </div>
            </div>
            </div>

    
    </div>
  )
}

export default WatchComments