import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      
      <div className="profile-left">
        <h2>John Doe</h2>
        <div className="profile-info">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="profile-image"
          />
          <ul className="user-details">
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Email Address:</strong> johndoe@gmail.com</li>
            <li><strong>City:</strong> Boston</li>
            <li><strong>State:</strong> Massachusetts</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Profession:</strong> Web Developer</li>
          </ul>
        </div>

       
        <div className="profile-wall">
          <div className="wall-header">Profile Wall</div>
          <textarea placeholder="Write on the wall" className="wall-input" />
          <div className="wall-controls">
            <button className="btn">Submit</button>
            <div className="wall-options">
              <button className="btn small">Text</button>
              <button className="btn small">Image</button>
              <button className="btn small">Video</button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="profile-right">
        
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

export default ProfilePage;
