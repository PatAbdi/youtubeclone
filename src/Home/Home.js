import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import YouBody from '../Youbody/YouBody';
import './Home.css';

export const Home = () => {
  return (
    <div className='app_body'>
  <Sidebar />
  <YouBody />
  </div>
  )
}
