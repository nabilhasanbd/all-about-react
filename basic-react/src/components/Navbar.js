import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <div className='container'>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand text-dark" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="/">About</a>
                </li>
              </ul>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}


// this is validation for react 
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

// if the value is not set
Navbar.defaultProps = {
  title: "Set title here"
}
