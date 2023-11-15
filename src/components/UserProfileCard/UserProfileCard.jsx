import React from 'react';
import './UserProfileCard.css';
import profile_icon from '../assets/manue.png';

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Emmanuelle Gnassounou</div>
            <div className="profile-description">I am a web developper in making step by step.</div>
            <div className="profile-button"><a href="mailto:manuegn145@gmail.com">Contact me</a></div>
        </div>
    </div>
  )
}

export default UserProfileCard;