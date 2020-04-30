import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getallposts } from "../../Actions/posts";
import Spinner from "./Spinner";
import PostItem from "./PostItem";
//  Card form that takes textarea and submits
// list of all the posts from everyone
// call the getallposts action onload using useffect
//  the data received must be displayed in a tabular fashion uisng map function
const Posts = ({
  getallposts,
  auth: { isAuthenticated, user },
  posts: { posts, loading }
}) => {
  useEffect(() => {
    getallposts();
  }, [getallposts]);
  return (
    (
      <Fragment>
        <section className="postnew">
          <div className="header">
            <h1>
              <img src="image.jpg" alt="avatar" />
              <h3> {user.name}</h3>
              <i className="fa fa-edit" aria-hidden="true"></i>
              Create Post{" "}
            </h1>
          </div>
          <form className="form_post">
            <input
              type="textarea"
              className="textarea"
              placeholder="Enter post here"
            />
            <div className="allfa">
              <i className="fa fa-camera" aria-hidden="true"></i>
              <i className="fa fa-video-camera" aria-hidden="true"></i>
              <i className="fa fa-file" aria-hidden="true"></i>
              <input type="submit" className="btn-submit" value="Post" />
            </div>
          </form>
        </section>
        ,
      </Fragment>
    ),
    isAuthenticated && !loading && posts !== null ? (
      <Fragment>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
        ;
      </Fragment>
    ) : (
      <Spinner />
    )
  );
};

Posts.propTypes = {
  getallposts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
});
export default connect(mapStateToProps, { getallposts })(Posts);
