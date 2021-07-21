import React from 'react'

function Mediapics({images}) {
    return (
        <div className="row">
             {images.map(function(image){
              return (
                  <div className="col ">
                      <img src={image} alt="#" />
                  </div>
              ) 
          })}
        </div>
    )
}

export default Mediapics
