import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
        <Navbar/>
        <h5 align="center"><u>BOOK DETAILS</u></h5><br></br>
    <div class="container">
        <div class="row g-3">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary" border="4">
                    <thead>
                      <tr>
                        <th scope="col">TITLE</th>
                        <th scope="col">AUTHOR</th>
                        <th scope="col">PUBLISHED YEAR</th>
                        <th scope="col">PRICE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">Half Girlfriend</td>
                        <td>Chethan Bhagath</td>
                        <td>2017</td>
                        <td>428</td>
                      </tr>
                      <tr>
                        <td scope="row">Sailing to the sea</td>
                        <td>Seyran</td>
                        <td>2023</td>
                        <td>359</td>
                      </tr>
                      <tr>
                        <td scope="row">When I Met You</td>
                        <td>Ferit</td>
                        <td>2024</td>
                        <td>456</td>
                      </tr>
                      <tr>
                        <td scope="row">Into The Darkness</td>
                        <td>Marcus Luoi</td>
                        <td>2000</td>
                        <td>499</td>
                      </tr>
                      <tr>
                        <td scope="row">Hey world</td>
                        <td>Thomas</td>
                        <td>1998</td>
                        <td>465</td>
                      </tr>
                      <tr>
                        <td scope="row">Miseries</td>
                        <td>Ginny</td>
                        <td>2011</td>
                        <td>254</td>
                      </tr>
                      <tr>
                        <td scope="row">Falling For You</td>
                        <td>Tessa</td>
                        <td>2020</td>
                        <td>567</td>
                      </tr>
                      <tr>
                        <td scope="row">Into the sea</td>
                        <td>Marcus</td>
                        <td>2015</td>
                        <td>390</td>
                      </tr>
                    </tbody>
                  </table>

            </div>
        </div>
    </div>
        
    </div>
  )
}

export default ViewAll