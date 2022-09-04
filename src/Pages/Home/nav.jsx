import React, { Component } from 'react'
import "./style.css"
import {GoThreeBars} from "react-icons/go"
export default class Nav extends Component {
  render() {
    return (
      <>
      <div className="container-fluid  d-flex justify-content-between nav py-3 p-0 m-0">
          <div className="col-lg-3 col-md-5 col-sm-5 col-9   d-flex justify-content-center align-items-center">
              <h3 className='text-white head2 '>Fitness <span className='head1'> Club</span></h3>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-2">
            <h2 className='text-white text-center icon'><GoThreeBars/></h2>
          </div>
      </div>
      </>
    )
  }
}
