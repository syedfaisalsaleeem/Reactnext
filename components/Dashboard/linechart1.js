import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    
    chart: {
        type: 'spline',
        backgroundColor:"#F9F9F9",
      },
    title: {
      text: ''
    },
    yAxis:{
        title:""
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%b'
        }
    },
    series: [{
        name: 'Alerts',
        data: [9, 6, 5, 5, 7, 4,4,4,5,20,10,16,10,10,7,1,7,5,3,4,3,4,5,4],
        pointStart: Date.UTC(2019, 4, 1),
        pointInterval: 24 *12 * 3600 * 1000,
        color:'green',

        dataLabels: {
            enabled: false,
            
            color: '#FFFFFF',
            align: 'right',
            x: -60,
            y: 20,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    {
        name: 'Risk',
        data: [8.25,9.75,4.5,4.5,5.25,9,3,13.5,15.75,27.75,12,19.5,12,18.75,16.5,1.5,12,4.5,3,9,3.75,4.5,9,3.75 ],
        pointStart: Date.UTC(2019, 4, 1),
        pointInterval: 24 *12* 3600 * 1000,
        color:'red',
        dataLabels: {
            enabled: false,
            
            color: '#FFFFFF',
            align: 'right',
            x: -60,
            y: 20,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }

]

  }
class LineChart1 extends React.Component{
    constructor(){
        super()
    }
render(){
    return(
        <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />

        </div>
    )
}
}
export default LineChart1;