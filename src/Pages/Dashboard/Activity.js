import React from 'react';
import parse from 'html-react-parser'
//DATA
import ActivityData from '../../data/activity.json';
//ICONS
import FirstIcon from '../../images/activity/1.png'
import SecondIcon from '../../images/activity/2.png'
import ThirdIcon from '../../images/activity/3.png'
//SASS
import '../../Style/activity.scss';

const Activity = () => {
    return (
        <>
            <div className='activity-container'>
                <div className='activity-title-cont'>
                    <div className='left-item'>
                        <h4 className="header-title">Activity</h4>
                    </div>
                </div>
            {
                ActivityData.map(index => {
                    return(
                        <div key={index.id} className={index.id === 1 ? 'activity-content first-activity-content' : 'activity-content'}>
                            <div className={index.id === 6 ? 'dates-container new-dates-container' : 'dates-container'}>
                                <div>
                                    <span className='activity-hour'>{index.hour}</span>
                                </div>
                                <div className='activity-date-container'>
                                    <span className='activity-date'>{index.date}</span>
                                </div>
                            </div>
                            <div className='line-container'>
                                <div className='activity-icons'>
                                    <img src={index.icon === 1 ? FirstIcon : index.icon === 2 ? SecondIcon : index.icon === 3 ? ThirdIcon : null} alt={index.icon}/>
                                </div>
                            </div>
                            <div className='content-container'>
                                <div>
                                    <span className='content-title'>{index.title}</span>
                                </div>
                                <div className='content-datas-container'>
                                    <p className='content-datas'>{parse(index.content)}</p>
                                    <p className='blue-content2'>{index.send}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Activity;
