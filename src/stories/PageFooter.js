import React from 'react'

function PageFooter({companyname,copy}) {
    return (
        <div className="container">
        <header className="d-flex  justify-content-center py-3 mb-4 bg-light ">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
            <span className="fs-4 text-primary">{companyname}</span>
          </a>
         <ul className="nav mx-auto">
            <li className="nav-item"><i href="#" className="nav-link fa fa-facebook"></i></li>
            <li className="nav-item"><i href="#" className="nav-link fa fa-instagram"></i></li>
            <li className="nav-item"><i href="#" className="nav-link fa fa-twitter"></i></li>
          </ul>
        <p className="text-primary ms-auto">{copy}</p>

        </header>
      </div>  
    )
}

export default PageFooter
