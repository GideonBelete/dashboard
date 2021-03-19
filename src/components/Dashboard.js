import React, { Component } from 'react'
import Barchart from './charts/Barchart'
import Piechart from './charts/Piechart'
import '../App.css'
import Linechart from './charts/Linechart'
import Polarchart from './charts/Polarchart'
import Doughnutchart from './charts/Doughnutchart'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashWrapper">
        <div className="dashContainer">
          <Barchart />
          <Piechart />
        </div>
        <div className="dashContainer">
          <Linechart />
        </div>
        <div className="dashContainer">
          <Polarchart />
          <Doughnutchart />
        </div>
      </div>
    )
  }
}

export default Dashboard
