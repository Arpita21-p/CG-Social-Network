import React from "react";
import "./PhotosPage.css";

const photoUrls = [
  "https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo+1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo+2",
  "https://via.placeholder.com/150/00FF00/FFFFFF?text=Photo+3",
  "https://via.placeholder.com/150/FFFF00/000000?text=Photo+4",
  "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Photo+5",
  "https://via.placeholder.com/150/00FFFF/000000?text=Photo+6",
];

const PhotosPage = () => {
  return (
    <div className="photos-page-container">
      <div className="main-content">
        <h2>Photos</h2>
        <div className="photos-grid">
          {photoUrls.map((url, index) => (
            <img key={index} src={url} alt={`Photo ${index}`} />
          ))}
        </div>
      </div>

  {/* Right Content - Sidebar */}
  <div className="profile-right">
    {/* My Friends */}
      <div className="sidebar-section">
        <div className="sidebar-header">My Friends</div>
        <div className="friends-grid">
           {[...Array(12)].map((_, i) => (
              <img
                key={i}
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Friend"
                className="friend-avatar"
              />
            ))}
          </div>
          <button className="btn">View All Friends</button>
        </div>

    {/* Latest Groups */}
  <div className="sidebar-section">
    <div className="sidebar-header">Latest Groups</div>
      {[...Array(3)].map((_, i) => (
        <div className="group-card" key={i}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
              alt="Group"
              className="group-icon"
              />
            <div>
            <strong>Sample Group One</strong>
              <p>This is a Dobbio social network sample group</p>
             </div>
            </div>
          ))}
          <button className="btn">View All Groups</button>
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;
