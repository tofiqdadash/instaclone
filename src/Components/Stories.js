import React from "react";

const Stories = ({ users }) => {
  return (
    <section className="Stories">
      {users.map((story) => (
        <div className="story" key={story.user.id}>
          <img
            src={story.user.profile_image.small}
            alt={story.user.profile_image.small}
          />
          <p> {story.user.first_name}</p>
        </div>
      ))}
    </section>
  );
};

export default Stories;
