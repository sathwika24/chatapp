import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

export const Profileitem =({ItemData,profilename,link,messageshortform,isOnline,numberOfUnreadMessages,selectedChatIndex,index,onClick}) => {
    console.log(
        ItemData,
        selectedChatIndex,
        index,
        onClick
    );
    return (
        <div id={index} onClick={onClick} className="listOfUsers  ">
       <div id={index} className={`d-flex display-name`}>
        <div  className="avatar">
        <div className="avatar-img">
          <img id={index} src={ItemData.link} alt="#" />
        </div>
        <span id={index} className={`isOnline ${ItemData.isOnline ? "active" : ""}`}></span>
      </div>
            <div className="" style={{margin: '0 5px'}}>
                <span id={index} className="" style={{fontWeight: 500}}>{ItemData.profilename}</span>
                <span className="nummsg  pb-4 text-center float-end">{ItemData.numberOfUnreadMessages}</span>
                <p className="my-0">{ItemData.messageshortform}</p>
            </div>
        </div>
    </div>
    )
}



