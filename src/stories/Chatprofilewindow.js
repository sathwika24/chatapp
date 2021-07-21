import React from 'react'
import "./Chatprofilewindow.css"

function Chatprofilewindow({profilename,detailsofperson,location,mobileno,emailid,link,isonline}) {
    return (
        <div className="col-3">
            <div className="text-center">
        <div className="profile">
        <div className="profile-img">
          <img  src={link} alt="#" />
        </div>
        <span className={`isonline ${isonline ? "active": "" }`}></span>
      </div>
            <h4 className="">{profilename}</h4>
            <p className="">{detailsofperson}</p>
            </div>
            <div>
            <i className="fa fa-globe  d-inline " aria-hidden="true"></i>
            <p className="d-inline px-2">{location}</p>
            </div>
            <div>
            <i className="fa fa-mobile d-inline" aria-hidden="true"></i>
            <p className="d-inline px-3">{mobileno}</p>
            </div>
            <div>
            <i className="fa fa-envelope-o d-inline" aria-hidden="true"></i>   
            <p className="d-inline px-2">{emailid}</p>
            </div>
            
        </div>
    )
}

export default Chatprofilewindow
