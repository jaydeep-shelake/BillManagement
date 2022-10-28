import React, { useMemo } from 'react'
import { useEffect,useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { getProcessedChartData } from '../utils/utilities'
import Chart from 'chart.js/auto';



const GraphPage = () => {
  const [chartData,setChartData]=useState({})
  const bills = useSelector(state=>state.bills)
  const billTotal= bills.reduce((a,b)=>a+parseInt(b.amount),0)
  console.log(billTotal)
  const arr=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  arr.push(billTotal)
  console.log(arr)
  useEffect(()=>{
    setChartData(getProcessedChartData(bills))
  
  },[bills])
  
  
    
console.log(chartData)
  const {labels=[]}=chartData
  const options={
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            // padding: 80,
            display: true,
          },
          gridLines: {
            drawBorder: true,
            display: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            // min: 0,
           
            display: true,
          },
          gridLines: {
            drawBorder: true,
            display: false,
          },
        },
      ],
    },
    tooltips: {
      
      backgroundColor: "rgba(66, 70, 101, 0.8)",
      bodyFontFamily: "Avenir",

    },
  }
  
  const optionsData= {
    labels: labels,
   
    datasets: [
      {
        label: "Monthly Bill Amt",
        fill: false,
        lineTension: 0.0,
        backgroundColor: "rgba(66, 70, 101, 0.4)",
        borderColor: "rgba(66, 70, 101, 1)",
        borderCapStyle: "butt",
        borderDash: [] ,
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        borderWidth: 2,
        pointBorderColor: "rgba(66, 70, 101, 1)",
        pointBackgroundColor: "rgba(66, 70, 101, 1)",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(66, 70, 101, 0.4)",
        pointHoverBorderColor: "rgba(66, 70, 101, 0.4)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: arr,
      },
    ],
  }

 

  return (
    <div className='main'>
     <div className="graph-title">
    
     </div>
     <div className="graph-area">
     <Line
     options={options}
     data={optionsData}
     />
     </div>
    </div>
  )
}

export default GraphPage