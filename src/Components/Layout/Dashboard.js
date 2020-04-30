import React, { useEffect, Fragment, useState } from "react";
import Spinner from "../Layout/Spinner";
import Posts from "../Layout/Posts";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../../Actions/profile";
import { setAlert } from "../../Actions/alert";
import Experience from "../Layout/Experience";
import Education from "../Layout/Education";
import Create_Experience from "./Create_Experience";
const Dashboard = ({
  getProfile,
  auth: { isAuthenticated, user },
  profile: { profile, loading },
}) => {
  const [form, setform] = useState(false);
  // here use effect to get the profile of the current user
  useEffect(() => {
    getProfile();
  }, [getProfile]); // means useEffect re runs only when value from getProfile changes
  // [] means runs only once
  //console.log(profile.bio);
  const handleformstate = (form) => setform(!form);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="Profile_Intro">
        <div className="Background-image">
          <img src="image.jpg" />
        </div>
        <div>
          <div className="Profile_dropdown">
            <button className="dropbtn">Add Profile Section</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <button className="Edit_profile_btn">
              <i className="fa fa-edit"></i>
            </button>
          </div>
          <div className="Profile_Name">
            <ul>
              <li>
                <i className="fa fa-user fa-sm"></i>
                {user.user.name}
              </li>
              <li>
                <i className="fa fa-laptop fa-sm"></i> {profile.profile.bio}
              </li>
              <li>
                <i className="fa fa-globe fa-sm"></i>
                {profile.profile.location}
              </li>
            </ul>
          </div>
          <div className="Profile_About">
            <h3>About</h3>
            <p>{profile.profile.about}</p>
          </div>
        </div>
      </div>
      <div className="Experience">
        <div className="Experience_header">
          <h3>Experience</h3>
          <i
            className="fa fa-plus fa-2x"
            onClick={() => handleformstate(form)}
          ></i>
        </div>
        {profile.profile.experience.map((experience) => (
          <Experience key={experience._id} experience={experience} />
        ))}
        ;
        {form && (
          <div className="overlay">
            <div className="header">
              <h3>Add Experience</h3>
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={(form) => handleformstate(form)}
              ></i>
            </div>
            <Create_Experience />
          </div>
        )}
        <div className="Education">
          <div className="Education_header">
            <h3>Education</h3>
            <i className="fa fa-plus fa-2x"></i>
          </div>
          {profile.profile.education.map((education) => (
            <Education key={education._id} education={education} />
          ))}
          ;
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propType = {
  auth: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfile })(Dashboard);
