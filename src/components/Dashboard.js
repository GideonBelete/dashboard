import React, { Component } from 'react'
import Barchart from './charts/Barchart'
import Piechart from './charts/Piechart'
import '../App.css'
import Linechart from './charts/Linechart'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashWrapper">
        <div className="dashContainer">
          <Barchart />
          <Piechart />
        </div>
        <Linechart />
      </div>
    )
  }
}

export default Dashboard
