import React, { Component } from 'react'
import "./style.css"
import Img8 from "../../Assets/Images/gallery1.jpg"
import Img9 from "../../Assets/Images/gallery2.jpg"
import Img10 from "../../Assets/Images/gallery3.jpg"
import Img11 from "../../Assets/Images/gallery4.jpg"
export default class Gallery extends Component {
  render() {
    return (
      <div>
          <div className="container-fluid py-5">
              <h2 className='py-3 text-center'>Workout Gallery</h2>
              <div className="row">
                  <div className="col-lg-6 home_pic5 p-0 m-0">
                      <img src={Img8} className="img-fluid " height="100%" width="100%" alt="" />
                  </div>
                  <div className="col-lg-6 home_pic5 p-0 m-0">
                      <img src={Img9} className="img-fluid" height="100%" width="100%" alt="" />
                  </div>
                  <div className="col-lg-6 home_pic5 p-0 m-0">
                      <img src={Img10} className="img-fluid" height="100%" width="100%" alt="" />
                  </div>
                  <div className="col-lg-6 home_pic5 p-0 m-0">
                      <img src={Img11} className="img-fluid" height="100%" width="100%" alt="" />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
