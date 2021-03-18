import React, { Component } from 'react'
import Barchart from './Barchart'
import Piechart from './Piechart'
import '../App.css'
import Linechart from './Linechart'

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
