import React, { useState } from 'react';
//Components
import Chart from 'react-apexcharts';
//DATA
import watchTimeDatas from '../../data/watchTimeDatas.json';
//SASS
import '../../Style/watchTime.scss'

const WatchTime = () => {

    const apexBarChartOpts = {
            grid: {
                padding: {
                    left: 0,
                    right: 0,
                },
            },
            chart: {
                height: 260,
                type: 'bar',
                stacked: true,
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '14%',
                    borderRadius: 5,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            zoom: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            colors: ['#5AD6B0', '#e3eaef'],
            xaxis: {
                categories: ['Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar'],
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                min: 0,
                max: 250,
                tickAmount: 5,
                labels: {
                    formatter: function (val) {
                        return val + 'K';
                    },
                    fontSize: 12,
                    lineHeight: 15,
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + 'K';
                    },
                },
                style: {
                    backgroundColor: "red",
                    fontSize: '12px',
                    width: "10px",
                },
            },
    };

    const [apexBarChartData, setApexBarChartData] = useState([{name: 'Movies', data: [215, 130, 230, 240, 145, 120]}])

    const changeDatas = (e) => {
        if(e.target.value === 'Month'){
            setApexBarChartData([{name:watchTimeDatas.Month.map((index) => index.Name)[0], data:watchTimeDatas.Month.map((index) => index.Value)[0]}]);
        }else if(e.target.value === 'Week'){
            setApexBarChartData([{name:watchTimeDatas.Week.map((index) => index.Name)[0], data:watchTimeDatas.Week.map((index) => index.Value)[0]}]);
        }
    }
    return (
        <div className='watch-time-container'>
            <div className='watch-time-title-cont'>
                <div className='left-item'>
                    <h4 className="header-title">Watch Time</h4>
                </div>
                <div className='right-item'>
                    <div onChange={changeDatas} className='select-watch-time-box'>
                        <select className='watch-time-select'>
                            <option value="Month">Last 6 Months</option>
                            <option value="Week">Last Week</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="wt-chart-container">
                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="bar"
                    className="apex-charts"
                    height={280}
                    width="100%"
                />
            </div>
        </div>
    )
}

export default WatchTime;
