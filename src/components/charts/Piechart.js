import React from 'react'
import { Pie } from 'react-chartjs-2'
import '../../App.css'

function Piechart() {
  return (
    <div className="piechart">
      <p>Basic Pie Chart</p>
      <Pie
        data={{
          labels: ['value one', 'value two', 'value three'],
          datasets: [{
            data: [5, 2, 10],
            labels: 'Pie Segments',
            backgroundColor: [
              'rgba(37,101,92, 0.2)',
              'rgba(62,168,154, 0.2)',
              'rgba(31,84,77, 0.2)'
            ]
          }]
        }}
        height={250}
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  )
}

export default Piechart
