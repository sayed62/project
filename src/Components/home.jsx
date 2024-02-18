import React from 'react'

export default function Home() {
  return (
    <>
    <div class="home d-flex justify-content-center align-items-center text-white">
      <div class="text-center">
        <img src={require('../img/avataaars (1).png')}alt=''  class="img mb-3 mt-5"></img>
        <div class="text-center pt-4" style={{color: "white"}}>
          <h2 class="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"  style={{backgroundColor: "white"}}></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3" style={{backgroundColor: "white"}}></div>
            </div>
        </div>
        <div >Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
    </>
  )
}
