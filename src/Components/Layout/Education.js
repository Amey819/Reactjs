import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Education = ({
  education: { school, degree, from, to, fieldofstudy, current },
}) => {
  return (
    <Fragment>
      <div class="Education-content">
        <div class="Education-image">
          <img src="image.jpg" alt="avatar" />
        </div>
        <div class="Education-Info">
          <ul>
            <h3>
              <li>{school}</li>
            </h3>
            <li>
              {degree} - {fieldofstudy}
            </li>
            <li>
              {from} - {to}
            </li>
          </ul>
        </div>
        <div class="edit">
          <button class="btn">
            <i class="fa fa-edit fa-2x"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Education.propType = {
  experience: PropTypes.object.isRequired,
};

export default Education;
