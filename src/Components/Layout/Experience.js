import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Experience = ({
  experience: { title, company, from, to, description, current },
}) => {
  console.log(title);
  return (
    <Fragment>
      <div className="wrapper">
        <div className="Experience-content">
          <div className="Experience-image">
            <img src="image.jpg" alt="avatar" />
          </div>
          <div className="Experience-Info">
            <ul>
              <h3>
                <li>{title}</li>
              </h3>
              <li>{company}</li>
              <li>
                {from} - {to}
              </li>
            </ul>
          </div>
          <div className="edit">
            <button className="btn">
              <i className="fa fa-edit fa-2x"></i>
            </button>
          </div>
        </div>
        <article className="description">
          <h3>Description</h3>
          <p> {description}</p>
        </article>
      </div>
    </Fragment>
  );
};

Experience.propType = {
  experience: PropTypes.object.isRequired,
};

export default Experience;
