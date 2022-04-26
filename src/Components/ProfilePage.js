import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfPageHeader from "./ProfPageHeader";

const ProfilePage = () => {
  const { username } = useParams();
  const [photos, setPhotos] = useState([]);

  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/users/${username}/photos/?client_id=UUQfl1AHCZ3l3Ptp5yu2mI2qFgXJ45aZ3ytWNsYcDYw`
    )
      .then((response) => response.json())
      .then((response) => {
        setPhotos(response);
      });
  }, [username]);

  return (
    <div className="ProfilePage">
      <ProfPageHeader photos={photos} />
      <div className="images-container">
        {photos.map((photo) => (
          <img src={photo.urls.regular} key={photo.id} alt={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
