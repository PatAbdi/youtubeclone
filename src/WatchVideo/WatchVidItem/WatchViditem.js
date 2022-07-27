import React from 'react';
import './WatchVidItem.css';

const WatchViditem = ({images, titles, channels, viewz, timestamps, channelimages}) => {
  return (
    <div className='watchviditem'>
      <div className='Container'>
        <div className='watchvids'>

       
      <div className='watchvids_img'>
        <img src={images} alt=""/>
        
        </div>

        <div className='watchvids_info'>
           
            <div className='watchvids_texts'>
            <h4>{titles}</h4>
            <span>{channels}</span>
            <p>{viewz}.{timestamps}</p>

            </div>

        </div>

      </div>
      </div>


    </div>
  )
}

export default WatchViditem