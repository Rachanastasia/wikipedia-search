import React, { useRef, useEffect } from 'react';
import { useFormatViews } from '../hooks/useFormatViews';
import Chart from "chart.js";


function ResultDetails(props) {
  const { totalViews, viewsPerDay, dates } = useFormatViews(props.views);
  const chartRef = useRef();

  useEffect(() => {
    const chartRefCtx = chartRef.current.getContext("2d");
    new Chart(chartRefCtx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: "Daily views",
          backgroundColor: "#01579B",
          data: viewsPerDay,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        xAxes: [{
          scaleLabel: {
            display: true,
            lableString: 'date'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'value'
          }
        }],

      }
    })
  }, [dates, viewsPerDay]);

  return (
    <div className='result-details-wrapper'>
      {props.desc ? <p className='result-details-desc'>{props.desc}</p> : null}
      <canvas className='chart' ref={chartRef} >
        <p>Total views in the past 60 days: {totalViews ? totalViews : 0}</p>
      </canvas>
    </div>
  )
}

export default ResultDetails;
