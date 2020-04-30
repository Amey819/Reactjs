import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const PostItem = ({
  post: { description },
  user: { user },
  profile: { profile },
}) => {
  console.log(profile);
  return (
    <div>
      <section className="Card">
        <div className="desc">
          <img src="image.jpg" alt="avatar" />
          <div className="Block">
            <h4>
              <i className="fa fa-user"></i>
              {user.name}
            </h4>
            <p>{profile.bio}</p>
            <p>
              <i className="fa fa-clock-o"></i>12h
            </p>
          </div>
        </div>
        <article>
          <p>{description}</p>
          <p>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i> 5{" "}
          </p>
        </article>
        <div className="tab">
          <p>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>Like
          </p>
          <p>
            <i className="fa fa-comments" aria-hidden="true"></i>Comment
          </p>
          <p>
            <i className="fa fa-share-alt" aria-hidden="true"></i>Share
          </p>
        </div>
      </section>
    </div>
  );
};

PostItem.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  profile: state.profile.profile,
});
export default connect(mapStateToProps)(PostItem);
