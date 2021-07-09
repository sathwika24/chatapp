import React from 'react'

function Profileitem({profilename,link,messageshortform,isOnline,numberOfUnreadMessages}) {
    return (
        <div className="listOfUsers">
        <div className="displayName">
        <div className="avatar">
        <div className="avatar-img">
          <img src={link} alt="#" />
        </div>

        <span className={`isOnline ${isOnline}`}></span>
      </div>
            <div className="" style={{margin: '0 10px'}}>
                <span className="" style={{fontWeight: 500}}>{profilename}</span>
                <span className={`nummsg  pb-4 text-center float-end`}>{numberOfUnreadMessages}</span>
                <p className="my-0">{messageshortform}</p>
            </div>
        </div>
    </div>
    )
}

export default Profileitem

{/* <div class="d-flex bd-highlight">
            <h3 className="p-2 flex-grow-1 bd-highlight">{appname}</h3>
            <i className="p-2 bd-highlight fa fa-plus my-1 mx-2 pt-3"></i>
            <i className="p-2 bd-highlight fa fa-ellipsis-v my-1 mx-2 pt-3"></i>
        </div> */}