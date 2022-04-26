import React from "react";

const ProfPageStatus = ({ photos }) => {
  return (
    <section className="status--container">
      {photos.map((photo) => (
        <img src={photo.urls.small} alt={photo.user.username} key={photo.id} />
      ))}
    </section>
  );
};

export default ProfPageStatus;
