import React, { Component } from 'react'
import "./style.css"
import Img7 from "../../Assets/Images/schedule1.png"
export default class Schedule extends Component {
  render() {
    return (
      <>
      <div className="container pt-4">
          <div className="row d-flex justify-content-between">
              <div className="col-lg-6 ">
            <h2 className='scheduleHeading pt-4 home_p2'>Classes Schedule</h2>
            <p className='schedulePara pt-3'>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since 
                  the 1500s, when an unknown printer took a galley
                   of type and scrambled it to make a type specimen 
                   book. It has survived not only five centuries,</p>
                   <div className='w-100  d-flex justify-content-center'>
                   <img  src={Img7} className="img-fluid home_pic4" alt="" />

                   </div>
              </div>

              <div className="col-lg-6  d-flex justify-content-center">

            <table className='Table mt-4 '>
                <tbody>
                    <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#C22525"}}>Monday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr>
                    <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#222222"}}>Tuesday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr> <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#444444"}}>Wednesday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr> <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#222222"}}>Thursday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr> <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#444444"}}>Friday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr> <tr className='border'>
                        <th className='tdata tdDay' style={{backgroundColor:"#222222"}}>Saturday</th>
                        <th className='tdata tTime'>9:00 AM</th>
                        <td className='tdata t2'> Body Building<br/>9:00 to 10:00 AM</td>
                        <td className='tdata  t3'>Room No:210</td>

                    </tr>
                   
                </tbody>
            </table>


              {/* <table class="table  table-bordered border border-primary "> */}
  {/* <thead>
    <tr>
      <td >Monday</td>
      <th >9:00 AM</th>
      <td >Body Building <br />  9:00 to 10:00 AM</td>
      <th ></th>
    </tr>
  </thead> */}
  {/* <tbody className='border border-danger d-flex flex-column'> */}
    {/* <tr className='border border-danger   w-100    '  style={{}}>
      <td className=' d-flex justify-content-center align-items-center   ' style={{height:"60px"}}>Monday</td>
      <th className=' d-flex justify-content-center align-items-center ' scope="row" style={{height:"60px"}}>9:00 AM</th>
      <td className=' d-flex justify-content-center align-items-center ' style={{height:"60px",}}>Body Building 9:00 to 10:00 AM</td>
      <td className=' d-flex justify-content-center align-items-center' style={{height:"60px"}}>Room No:210</td>
    </tr> */}
    {/* <tr>
        <div className='d-flex'>
      <td className='px-3 d-flex justify-content-center align-items-center days px-4    ' style={{height:"60px"}}>Monday</td>
      <th className='d-flex justify-content-center align-items-center px-3' style={{height:"60px"}}> 9:00 AM </th>
      <td className='d-flex justify-content-center align-items-center px-4 text-center tableFonts'  style={{height:"60px",}}>Body Building <br /> 9:00 to 10:00 AM</td>
      <td className='d-flex justify-content-center align-items-center px-4 tableFonts'  style={{height:"60px"}}>Room No:210</td>
      </div>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody> */}
{/* </table> */}
              </div>

          </div>
      </div>
      </>
    )
  }
}
