import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../../App.css'

function Doughnutchart() {
  return (
    <div className="doughnutchart">
      <p>Basic Doughnut Chart</p>
      <Doughnut
        data={{
          labels: ['value one', 'value two', 'value three'],
          datasets: [{
            data: [5, 2, 10],
            label: 'Value',
            backgroundColor: [
              'rgba(37,101,92, 0.2)',
              'rgba(62,168,154, 0.2)',
              'rgba(31,84,77, 0.2)'
            ]
          }]
        }}
        height={200}
        width={600}
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

export default Doughnutchart
