import React from 'react'


export default function Footer() {

    return (
      <div className="footer">
        <div className="card-group m-4 ">
          <div className="card border-0" style={{backgroundColor: "#2c3e50"}}>
            <div className=" text-center" style={{color: "white"}}>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card border-0" style={{backgroundColor: "#2c3e50"}}>
            <div className=" text-center" style={{color: "white"}}>
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <i className="fa-brands fa-facebook icon"></i>
                <i className="fa-brands fa-twitter icon"></i>
                <i className="fa-brands fa-linkedin-in icon"></i>
                <i className="fa-solid fa-globe icon"></i>
              </div>
            </div>
          </div>
          <div className="card border-0" style={{backgroundColor: "#2c3e50"}}>
            <div className=" text-center" style={{color: "white"}}>
              <h3>ABOUT FREELANCER</h3>
              <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>
          </div>
        </div>
        <div className='pp'>
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    )
  }


