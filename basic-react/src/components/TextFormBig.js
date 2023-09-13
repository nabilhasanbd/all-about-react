import React from 'react'
import PropTypes from 'prop-types'


export default function TextFormBig(prop) {
    return (
        <div>
            <h3>{prop.title}</h3>
            <div className="mb-3">
            <textarea className="form-control" id="myTextBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary">Chnage to uppercase</button>
        </div>
    )
}

