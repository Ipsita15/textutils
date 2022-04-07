import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.history}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.transactions}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{props.contact}</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-secondary" type="submit">Login</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input " onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable ToggleMode</label>
            </div>

            {/* <div className={`form-check form-switch text-${props.greenMode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable GreenMode</label>
            </div> */}
            <div className="d-flex">
              <div className="bg-primary rounded mx-2 " onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
              <div className="bg-danger rounded mx-2 " onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
              <div className="bg-success rounded mx-2 " onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
              <div className="bg-warning rounded mx-2 " onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
              <div className="bg-dark rounded mx-2 " onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
              <div className="bg-light rounded mx-2 " onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px', cursor:'pointer'}}> </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.string,
  transactions: PropTypes.string,
  contact: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  transactions: "Payment portal",
  contact: "Contact Info"
}