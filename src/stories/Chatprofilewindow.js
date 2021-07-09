import React from 'react'

function Chatprofilewindow({name,detailsofperson,location,mobileno,emailid}) {
    return (
        <div className="col-3">
            <div className="text-center">
            <image src=""></image>
            <h4 className="">{name}</h4>
            <p className="">{detailsofperson}</p>
            </div>
            <div>
            <i className="fa fa-globe  d-inline " aria-hidden="true"></i>
            <p className="d-inline px-2">{location}</p>
            </div>
            <div>
            <i className="fa fa-mobile d-inline" aria-hidden="true"></i>
            <p className="d-inline px-2">{mobileno}</p>
            </div>
            <div>
            <i className="fa fa-envelope-o d-inline" aria-hidden="true"></i>   
            <p className="d-inline px-2">{emailid}</p>
            </div>
        </div>
    )
}

export default Chatprofilewindow
