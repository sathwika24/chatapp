import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import 'font-awesome/css/font-awesome.min.css'

function Conversationbox({profilename}) {
    return (
        <div className="col-6">
          <div className="header d-flex bd-highlight">
            <h3 className="p-2 flex-grow-1 bd-highlight">{profilename}</h3>
            <i className="p-2 bd-highlight fa fa-phone my-1 mx-2 pt-3"></i>
            <i className="p-2 bd-highlight fa fa-video-camera my-1 mx-2 pt-3"></i>
          </div> 
          
        </div>
    )
}

export default Conversationbox
