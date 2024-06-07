import React from 'react'
import Navbar from './Navbar'

const DeleteBook = () => {
  return (
    <div>
        <Navbar/>
         <br></br>
        <h5 align="center"><u>DELETE BOOK</u></h5>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><label htmlFor="" className="form-label">BOOK NAME</label></center>
                            <input type="text" className="form-control" />
                        </div><br></br>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                        <button className="btn btn-danger">DELETE</button>
                        </div></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBook