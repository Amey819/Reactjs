import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import { addExperience } from "../../Actions/profile";
import PropTypes from "prop-types";
import { setAlert } from "../../Actions/alert";
const Create_Experience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // assign formdata to the values
  const { title, company, location, from, to, current, description } = formData;
  const submitform = (e) => {
    // call the add experience api here
    // no automatic refresh on submit
    console.log(history);
    addExperience(formData, history); // sends the formdata with Router history
  };
  return (
    <Fragment>
      <form onSubmit={(e) => submitform(e)}>
        <div class="container">
          <label for="email">
            <b>Title</b>
          </label>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
          <label for="company">
            <b>Company</b>
          </label>
          <input
            type="text"
            placeholder="Add your Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
          <label for="Location">
            <b>Location</b>
          </label>
          <input
            type="text"
            placeholder="Add your Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={() => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Current Job
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button type="submit" className="registerbtn">
            Save
          </button>
        </div>
      </form>
    </Fragment>
  );
};

Create_Experience.propType = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(Create_Experience));
