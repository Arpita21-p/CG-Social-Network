import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

function Home() {
  const posts = [
    {
      id: 1,
      user: 'DevUser1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt eget erat feugiat. Praesent adipiscing tortor eu blandit tempus. Sed convallis est in ante sodales, sit amet consectetur leo commodo.',
      likes: 7,
      comments: [
        { user: 'UserA', text: 'Sed convallis est in ante sodales, sit amet consectetur leo commodo.' },
        { user: 'UserB', text: 'Sed convallis est in ante sodales, sit amet consectetur leo commodo.' },
      ],
    },
    {
      id: 2,
      user: 'DevUser2',
      content: 'Adipiscing elit in tincidunt eget erat feugiat. Praesent adipiscing tortor eu blandit tempus. Sed convallis est in ante sodales, sit amet consectetur leo commodo.',
      likes: 2,
      comments: [
        { user: 'UserC', text: 'Sed convallis est in ante sodales, sit amet consectetur leo commodo.' },
      ],
    },
    {
      id: 3,
      user: 'DevUser3',
      content: 'Adipiscing elit in tincidunt eget erat feugiat. Praesent adipiscing tortor eu blandit tempus. Sed convallis est in ante sodales, sit amet consectetur leo commodo.',
      likes: 2,
      comments: [],
    },
  ];

  const friends = Array(8).fill(null); 
  const groups = [
    { name: 'Sample Group One', description: 'This is a DCSI social network sample group.' },
    { name: 'Sample Group One', description: 'This is a DCSI social network sample group.' },
    { name: 'Sample Group One', description: 'This is a DCSI social network sample group.' },
  ];

  return (
    <div className="social-network-page">
      <header className="header">
        <div className="top-nav">
          <div className="logo">Social Networking for Everyone</div>
          <div className="login-section">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button>Sign In</button>
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/groups">Groups</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/photos">Photos</Link></li>
          
           
          </ul>
        </nav>
      </header>

      <div className="main-container">
        <main className="wall">
          <div className="post-composer">
            <textarea placeholder="Write on the wall..." />
            <button>Submit</button>
            <div className="post-options">
              <span><a href="#">Text</a></span>
              <span><a href="#">Image</a></span>
              <span><a href="#">Video</a></span>
            </div>
          </div>

          {posts.map(post => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <div className="user-avatar"></div> 
                <div className="user-info">{post.user}</div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <a href="#">Comment</a> - <a href="#">Like</a> - <a href="#">Follow</a> - <a href="#">Share</a>
              </div>
              <div className="post-comments">
                {post.comments.map((comment, index) => (
                  <div className="comment" key={index}>
                    <div className="user-avatar small"></div> 
                    <span>{comment.user}:</span> {comment.text}
                  </div>
                ))}
                <div className="add-comment">
                  <input type="text" placeholder="Enter Comment" />
                  <button>Add</button>
                </div>
              </div>
              <div className="post-likes">{post.likes} Likes</div>
            </div>
          ))}
        </main>

        <aside className="sidebar">
          <div className="widget friends-widget">
            <h3>My Friends</h3>
            <div className="friends-list">
              {friends.map((_, index) => (
                <div className="friend-avatar" key={index}></div>
              ))}
            </div>
            <button className="view-all-button">View All Friends</button>
          </div>

          <div className="widget groups-widget">
            <h3>Latest Groups</h3>
            <div className="groups-list">
              {groups.map((group, index) => (
                <div className="group-item" key={index}>
                  <div className="group-icon"></div>
                  <div className="group-info">
                    <h4>{group.name}</h4>
                    <p>{group.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-button">View All Groups</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
