import React, { useState } from 'react';
//Components
import Chart from 'react-apexcharts';
//DATA
import categoriesDatas from '../../data/categoriesDatas.json';
//SASS
import '../../Style/categories.scss'

const Categories = () => {
    const apexDonutOpts = {
        chart: {
            height: 340,
            type: 'donut',
        },
        colors: ['#4C8DEB', '#5AD6B0', '#FFAB49', '#EE5D70'],
        legend: {
            show: false,
        },
        labels: ['Action', 'Comedy', 'Romantic', 'Drama'],
        dataLabels: {
            enabled: false,
        },
        plotOptions:{
            pie: {
                expandOnClick: false,
                donut: {
                    size: "85px",
                    labels: {
                        show: true,
                        value: {
                            fontWeight: 700,
                            fontSize: 20,
                            offsetY: -18,
                        },
                        total: {
                            label: "movies",
                            fontSize: 16,
                            show:true,
                            fontWeight: 400,
                            color: "#8FB7F3"
                        },
                        name: {
                            offsetY: 18,
                        }
                    }
                }
            }
        },
        tooltip: {
            y: {
              formatter: function(val) {
                return val
              },
            }
          },
        responsive: [
            {
                breakpoint: 376,
                options: {
                    chart: {
                        width: 250,
                        height: 250,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };
    const [apexDonutData, setApexDonutData] = useState([11081, 4737, 2822, 1508])
    const changeDatas = (e) => {
        if(e.target.value === 'Year'){
            setApexDonutData(categoriesDatas.Year.map((index) => index.Value)[0]);
        }else if(e.target.value === 'Month'){
            setApexDonutData(categoriesDatas.Month.map((index) => index.Value)[0]);
        }else if(e.target.value === 'Week'){
            setApexDonutData(categoriesDatas.Week.map((index) => index.Value)[0]);
        }
    }
    return (
        <div className='movie-chart-container'>
            <div className='movie-chart-title-cont'>
                <div className='left-item'>
                    <h4 className="header-title">Categories</h4>
                </div>
                <div className='right-item'>
                    <div className='select-categories-box'>
                        <select onChange={changeDatas} className='categories-select'>
                            <option value="Month">This Month</option>
                            <option value="Year">This Year</option>
                            <option value="Week">This Week</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='main-chart-container'>
                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={260}
                    width="100%"
                />
            </div>
            <div className="chart-widget-list">
                <div className='first-movie'>
                    <div className='action' />
                    <span>Action</span>
                </div>
                <div className='second-movie'>
                    <div className='comedy' />
                    <span>Comedy</span>
                </div>
                <div className='third-movie'>
                    <div className='romantic' />
                    <span>Romantic</span>
                </div>
                <div className='fourth-movie'>
                    <div className='drama'/>
                    <span>Drama</span>
                </div>
            </div>
        </div>
    )
}

export default Categories;
