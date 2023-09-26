import React from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
  <div class="mb-3">
    <textarea class ="form-control" id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-qprimary">Convert to Upper Case</button>
    </div>
  );
}
