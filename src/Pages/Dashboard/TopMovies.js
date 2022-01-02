import React from 'react'
//DATA
import topMoviesData from '../../data/topMovies.json';
//PNG
import Star from '../../images/topMovies/1.png';
//SASS
import '../../Style/topMovies.scss';

const TopMovies = () => {
    return (
        <>
            <div className='top-movies-container'>
                <div className='top-movies-title-cont'>
                    <div className='left-item'>
                        <h4 className="header-title">Top Movies</h4>
                    </div>
                </div>
                {
                    topMoviesData.map(index => {
                        return(
                            <div key={index.id} className='top-movies-content-container'>
                                <div className='top-movies-content'>
                                    <div className='content-nn'>
                                        <div className='content-number'>
                                            <span>{index.id}</span>
                                        </div>
                                        <div className='content-name'>
                                            <span>{index.name}</span>
                                        </div>
                                    </div>
                                    <div className='content-point'>
                                        <img src={Star} alt="star"/>
                                        <span>{index.point}</span>
                                    </div>
                                </div>
                                {topMoviesData.length === index.id ? (null) : <div className='top-movies-border' />}
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default TopMovies;
