import React, { useRef, useEffect } from 'react';
import { useFormatViews } from '../hooks/useFormatViews';
import Chart from "chart.js";


function ResultDetails(props) {
  const { totalViews, viewsPerDay, dates, max } = useFormatViews(props.views);
  const chartRef = useRef();
  let chartRefCtx;
  console.log(max, viewsPerDay)

  useEffect(() => {
    chartRefCtx = chartRef.current.getContext("2d");

    new Chart(chartRefCtx, {
      type: 'line',
      data: {
        labels: dates,
        viewsPerDay: viewsPerDay
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
  })

  return (
    <div className='result-details-wrapper'>
      {props.desc ? <p className='result-details-desc'>{props.desc}</p> : null}
      <canvas className='chart' ref={chartRef} />
      <p>Total views in the past 60 days: {totalViews ? totalViews : 0}</p>
    </div>
  )
}

export default ResultDetails;
