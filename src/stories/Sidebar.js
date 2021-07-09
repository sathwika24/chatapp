import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import 'font-awesome/css/font-awesome.min.css'

 function Sidebar({appname,backgroundColor}) {

 

    return (
     <div className="col-3"  style={backgroundColor && { backgroundColor }}>
        <div class="d-flex bd-highlight">
            <h3 className="p-2 flex-grow-1 bd-highlight">{appname}</h3>
            <i className="p-2 bd-highlight fa fa-plus my-1 mx-2 pt-3"></i>
            <i className="p-2 bd-highlight fa fa-ellipsis-v my-1 mx-2 pt-3"></i>
        </div>
        <div className="d-grid px-3">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
        </div>
        <div className="d-flex justify-content-between my-3">
        <i class="fa fa-comment-o fa-sm" aria-hidden="true"></i>
        <i class="fa fa-users fa-sm" aria-hidden="true"></i>
        <i class="fa fa-address-book-o fa-sm" aria-hidden="true"></i>
        <i class="fa fa-address-book-o fa-sm" aria-hidden="true"></i>
        </div>
    </div>
        
    )
}
 export default Sidebar     
