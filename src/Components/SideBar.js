import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//PNG
import First from '../images/sidebar/1.png';
import Second from '../images/sidebar/2.png';
import Third from '../images/sidebar/3.png';
import Fourth from '../images/sidebar/4.png';
//SASS
import '../Style/sidebar.scss';


const SideBar = () => {
    const [isClick, setIsClick] = useState(1);
    const firstClickButton = () => {
      setIsClick(1);
    }
    const secondClickButton = () => {
      setIsClick(2);
    }
    const thirdClickButton = () => {
      setIsClick(3);
    }
    const fourthClickButton = () => {
      setIsClick(4);
    }
    return (
        <div className='main-sidebar-container'>
            <div className='photo-container' />
            <Link to="/">
              <div onClick={firstClickButton} className={isClick === 1 ? 'icon-container click-button' : 'icon-container'}>
                <img src={First} alt="First"/>
              </div>
            </Link>
            <Link to="/chat">
              <div onClick={secondClickButton} className={isClick === 2 ? 'icon-container click-button' : 'icon-container'}>
                <img src={Second} alt="Second"/>
              </div>
            </Link>
            <Link to="/documents">
              <div onClick={thirdClickButton} className={isClick === 3 ? 'icon-container click-button' : 'icon-container'}>
                <img src={Third} alt="Third"/>
              </div>
            </Link>
            <Link to="/sell-movies">
              <div onClick={fourthClickButton} className={isClick === 4 ? 'icon-container click-button' : 'icon-container'}>
                <img src={Fourth} alt="Fourth"/>
              </div>
            </Link>
        </div>
    )
}

export default SideBar;
