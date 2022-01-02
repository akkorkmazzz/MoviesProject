import React from 'react'
//Components
import Title from '../../Components/Title';
//Pages
import Categories from './Categories';
import WatchTime from './WatchTime';
import Activity from './Activity';
import TopMovies from './TopMovies';
import Movies from './Movies';
//SASS
import '../../Style/dashboard.scss'

const Dashboard = () => {
    return (
        <>
            <Title name={'Dashboard'} />
            <div className='main-content'>
                <div className='left-content'>
                    <div className='left-top-content'>
                        <div className='categories-main-container'>
                            <Categories />
                        </div>
                        <div className='watch-time-main-container'>
                            <WatchTime />
                        </div>
                    </div>
                    <div className='left-bottom-content'>
                        <div className='top-movies-main-container'>
                            <TopMovies />
                        </div>
                        <div className='movies-main-container'>
                            <Movies />
                        </div>
                    </div>
                </div>
                <div className='right-content'>
                    <Activity />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
