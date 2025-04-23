// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Members from './components/Members';
// import Groups from './components/Groups';
// import Photos from './components/Photos';
// import Profile from './components/Profile';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// const App = () => {
//  return (
// <Router>
// {/* <Header /> */}
// <Navbar />
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/members" element={<Members />} />
// <Route path="/groups" element={<Groups />} />
// <Route path="/photos" element={<Photos />} />
// <Route path="/profile" element={<Profile />} />
// <Route path="/signin" element={<SignIn />} />
// <Route path="/signup" element={<SignUp />} />
// </Routes>
// </Router>
//  );
// };
// export default App;
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Navbar from './components/Navbar';

import Home from './components/Home';

import Members from './components/Members';

import Groups from './components/Groups';

import Photos from './components/Photos';

import Profile from './components/Profile';

import SignUp from './components/SignUp';

function App() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = (e) => {

    if (e.target.name === 'email') setEmail(e.target.value);

    else if (e.target.name === 'password') setPassword(e.target.value);

  };

  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser?.email === email && storedUser?.password === password) {

      localStorage.setItem('isLoggedIn', 'true');

      alert('Login successful!');

    } else {

      alert('Invalid credentials');

    }

  };

  return (
<Router>
<Header

        email={email}

        password={password}

        handleChange={handleChange}

        handleLogin={handleLogin}

      />
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/members" element={<Members />} />
<Route path="/groups" element={<Groups />} />
<Route path="/photos" element={<Photos />} />
<Route path="/profile" element={<Profile />} />
<Route path="/signup" element={<SignUp />} />
</Routes>
</Router>

  );

}

export default App; 