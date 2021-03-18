import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import face0 from "../assets/img/faces/face-0.jpg"

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-image">

                </div>
                <div className="card-body">
                  <div className="author">
                    <Link to='/'>
                      <img className="avatar border-gray" src={face0} alt="..." />
                      <h5 className="title">Gideon B</h5>
                    </Link>
                    <p className="description">
                      Interactive Experience Developer
                    </p>
                  </div>
                  <p className="description text-center">
                  A natural dot-connector, Gideon’s relentless curiosity keeps his mind searching for answers to “what is this” and “how does it work.”
                  </p>
                </div>
                <hr />
                <div className="button-container mr-auto ml-auto">
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-facebook-square"></i>
                  </button>
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-twitter"></i>
                  </button>
                  <button className="btn btn-simple btn-link btn-icon">
                    <i className="fa fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile
