import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

function PageHeader({companyname,navlink1,navlink2}) {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-primary" href="#">{companyname}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
       <ul className="navbar-nav ms-auto  nav-pills mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link mx-1 active" aria-current="page" href="#">{navlink1}</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">{navlink2}</a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}

export default PageHeader
