import React from 'react';
import './WatchVideo.css';
import { Link } from 'react-router-dom';
import WatchViditem from './WatchVidItem/WatchViditem';

const WatchVideo = () => {
  return (
    <div className='watchvideo'>
        <div className='Container'>
            <div className='watchvideo-items'>

                <div className='watchvideo-item-view'>
                <iframe width="1280" height="720" 
                src="https://www.youtube.com/embed/KmJZdfAWhWk" 
                title="Dark Cyberpunk / EBM / Midtempo Bass Mix 'OBSCURA vol.2'" 
                frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen>

                </iframe>

                </div>

                <div className='watchvideo-item-suges'>


                <WatchViditem

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/Mushroom bottle-1.png"
 
                    />

                <Link to = '/WatchVideo:id'>

                <WatchViditem

                titles="Dark Cyberpunk / EDM / Midstep Ultra Bass Mix 'OBSCURA vol.12'."
                viewz="13.0M Views"
                timestamps="12 months ago"
                channels="CyberPunkk"
                images="assets/cyberpunk-2077-red-screen-4k-wf.jpg"
                
                />

                </Link>

                <WatchViditem

                titles="DIVE IN // Episode 5: Act I Kickoff - VALORANT."
                viewz="23.0M Views"
                timestamps="1 Week ago"
                channelimages="assets/suke-fvyuupkviaanauy.jpg"
                channels="VALORANT"
                images="assets/suke-fvyuupkviaanauy.jpg"
                
                />

                <WatchViditem

                titles="Marvel Studios' Thor: Love and Thunder | Official Trailer | In Cinemas 8 July 2022."
                views="1.5M Views"
                timestamps="2 months ago"
                channels="New Movie Sets"
                images="assets/tessa_thompson_valkyrie_hd_thor_love_and_thunder.jpg"
                
                />

                 <WatchViditem 

                titles="Top 10 NEW Horizon Forbidden West Machines Ranked."
                viewz="3.0M Views"
                timestamps="4 months ago"
                channels="PatRatesTime"
                images="assets/aloy-horizon-forbidden-west-5k-u8.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
               images="assets/horizon-forbidden-west-aloy-zl.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/jamie_hd_street_fighter_6.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/korg_hd_thor_love_and_thunder.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/natalie_portman_lady_thor_hd_thor_love_and_thunder.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/2022-tomclancys-rainbow-six-extraction-5k-hw.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/blue-archive-hm.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/game-of-thrones-night-king-and-white-walkers-nz.jpg"
                
                />
                 <WatchViditem 

                titles="Become a 3D Character Creator in 30 minutes."
                viewz="3.0M Views"
                timestamps="2 months ago"
                channels="PatPrimeDesigns"
                images="assets/cyberpunk-2077-johnny-silverhand-fanart-4k-4j.jpg"
                
                />

                </div>

            </div>

        </div>
        </div>
  )
}

export default WatchVideo