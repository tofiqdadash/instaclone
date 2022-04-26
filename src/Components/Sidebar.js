import React from "react";

const Sidebar = ({ users }) => {
  return (
    <section className="Sidebar">
      <div className="main-account">
          <img src="./assets/prof.png" alt="example prof" />
        <div className="main-account-details">
          <h4>tofique.d</h4>
          <p>Ted</p>
          <img
            src="./assets/Profile-Btn.png"
            alt="switch btn"
            className="main-switch-btn"
          />
        </div>
      </div>

      <p className="suggestions-text">Suggestions for you</p>

      <div className="suggestions-container">
        {users.map((profile) => (
          <div className="account" key={profile.user.id}>
            <img
              src={profile.user.profile_image.small}
              alt={profile.user.instagram_username}
            />
            <div className="account-details">
              <h4>{profile.user.instagram_username}</h4>
              <p>
                {profile.user.first_name} {profile.user.last_name}
              </p>
            </div>
            <img
              src="./assets/Follow-Btn.png"
              alt="follow button"
              className="switch-btn"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
