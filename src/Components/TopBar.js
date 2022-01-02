import React, { useState } from 'react'
import { useSelector } from 'react-redux';
//PNG
import Profile from '../images/profile.png';
import Notification from '../images/1.png';
import Search from '../images/dashboard/2.png';
//SASS
import "../Style/topbar.scss";

const TopBar = () => {
    const {counter, movieName} = useSelector((state) => state);
    const [isClick, setIsClick] = useState(false);
    const clickInfo = () => {
        setIsClick(!isClick);
    }
    return (
        <div className='main-container'>
            <div className='left-items'>
                <div className='left-items-container'>
                    <img src={Search} alt="search"/>
                    <input placeholder='Search' type="search" />
                </div>
            </div>
            <div className='right-items'>
                <div className='topbar-content-container'>
                    <div>
                        <span>Reviewed Movies Count : {counter}</span>
                    </div>
                    <div>
                        <div>
                        <span>Last Reviewed Movie : {movieName}</span>

                        </div>
                    </div>
                </div>
                <div onClick={clickInfo} className='topbar-info-button'>
                    Info
                    <div className={isClick ? "dropdown-content show-dropdown-content" : "dropdown-content"}>
                        <div>
                            <span>Reviewed Movies Count : {counter}</span>
                        </div>
                        <div>
                            <span>Last Reviewed Movie : {movieName}</span>
                        </div>
                    </div>
                </div>
                <div className='topbar-notification-container'>
                    <img  src={Notification} alt="notification"/>
                </div>
                <div className='photo-container'>
                    <img  src={Profile} alt="profile"/>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
