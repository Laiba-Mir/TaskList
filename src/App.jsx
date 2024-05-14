
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Login from './Pages/SignUp/Login';
import SignIn from './Pages/SignUp/SignIn';
import Dashboard from './Pages/SignUp/Dashboard';
import Notifications from './Pages/SignUp/Notifications';
import Tasks from './Pages/SignUp/Tasks';
import User from './Pages/SignUp/User';
import Resetpass from './Pages/SignUp/ResetPass';
import { snapshot, useSnapshot } from 'valtio';
import { store } from './GlobalStateManagement/globalStore';

function App() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const userRole = useSelector(state => state.auth.userRole);
  const storecopy =  useSnapshot(store);
  console.log("storecopystorecopystorecopystorecopy",storecopy)
  const isAuthenticated = storecopy.data?.user?.email && true;
  const userRole = storecopy.data?.user?.role

  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/users" element={<User />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      {isAuthenticated && (
        <>
          {userRole === 'user' && (
            <>
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/resetpass" element={<Resetpass />} />
            </>
          )}
          {userRole === 'admin' && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/resetpass" element={<Resetpass />} />
            </>
          )}
        </>
      )}
    </Routes>
  );
}

export default App;