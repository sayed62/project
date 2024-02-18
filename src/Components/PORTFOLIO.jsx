import React from 'react'
import '../App.css';


export default function PORTFOLIO () {
  return (
    <>
    <div className="mb-4">
      <div className="pt-4">
        <div title="portfolio component" >
          <div className="text-center pt-4"  style={{color: "rgb(44, 62, 80)"}}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"  style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3" style={{backgroundColor: "rgb(44, 62, 80)"}}></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/poert1.png')} alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/port2.png')} alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/port3.png')}alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/poert1.png')} alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/port2.png')} alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="rounded-3 overflow-hidden position-relative">
                <img className="w-100 rounded-3" src={require('../img/port3.png')} alt=''></img>
                <div className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
