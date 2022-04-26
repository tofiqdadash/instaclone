import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import FPNavbar from "./FPNavbar";
import FPFooter from "./FPFooter";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

const FeedPage = () => {
  const [result, setResult] = useState([]);
  const user = localStorage.getItem("user");

  const url =
    "https://api.unsplash.com/photos/?client_id=UUQfl1AHCZ3l3Ptp5yu2mI2qFgXJ45aZ3ytWNsYcDYw";

  useEffect(() => {
    axios.get(url).then((response) => {
      setResult(response.data);
    });
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }


  return (
    <main className="FeedPage">
      <Stories users={result} />
      <FPNavbar />
      <div className="fp--posts-container">
        {result.map((post) => (
          <div className="fp--post" key={post.id}>
            <div className="post-user-details">
              <Link className="fp--link" to={`/profile/${post.user.username}`}>
                <img
                  className="user-profile-image"
                  src={post.user.profile_image.small}
                  alt={post.user.profile_image.small}
                />
                <h4>{post.user.social.instagram_username}</h4>
              </Link>

              <img
                className="details-icon"
                src="./assets/details-icon.png"
                alt="details icon"
              />
            </div>

            <img
              className="post-image"
              src={post.urls.regular}
              alt={post.name}
            />
            <FPFooter />
            <p className="post-likes"> {post.likes} likes </p>
            <div className="post-description">
              <h4>{post.user.social.instagram_username}</h4>
              <p>
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..."
              </p>
            </div>
            <div className="react-time-ago">
              <ReactTimeAgo date={Date.parse(post.updated_at)} locale="en-US" />
            </div>
          </div>
        ))}
        <Sidebar users={result} />
      </div>
    </main>
  );
};

export default FeedPage;
