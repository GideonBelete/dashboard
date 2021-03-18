import React from 'react'
import { Bar } from 'react-chartjs-2'
import '../../App.css'

function Barchart() {
  return (
    <div className="barchart">
      <p>Basic Bar Chart</p>
      <Bar
      data={{
        labels: ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'],
        datasets: [{
          label: 'Some Metric',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(37,101,92, 0.2)',
            'rgba(50,134,123, 0.2)',
            'rgba(62,168,154, 0.2)',
            'rgba(101,185,174, 0.2)',
            'rgba(81,177,164, 0.2)',
            'rgba(31,84,77, 0.2)'
          ],
          borderColor: [
            'rgba(37,101,92, 1)',
            'rgba(50,134,123, 1)',
            'rgba(62,168,154, 1)',
            'rgba(101,185,174, 1)',
            'rgba(81,177,164, 1)',
            'rgba(31,84,77, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Other Metric',
          data: [50, 75, 65, 50, 30, 50],
          backgroundColor: 'rgba(12,34,31, 0.2)',
          borderColor: 'rgba(12,34,31, 1)'
        }
      ]
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

export default Barchart
