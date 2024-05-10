// // import { useState } from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// // import SignUp from "./Pages/SignUp/SignUp";
// import Login from "./Pages/SignUp/Login";
// import SignIn from "./Pages/SignUp/SignIn";
// import Dashboard from "./Pages/SignUp/Dashboard";
// import Notifications from "./Pages/SignUp/Notifications";
// import Tasks from "./Pages/SignUp/Tasks";
// import User from "./Pages/SignUp/User";
// import Resetpass from "./Pages/SignUp/ResetPass";
// import { useSelector } from 'react-redux';
// import store from './redux/store'; // Import the Redux store
// import { loginSuccess, logoutSuccess, setUserRole } from './redux/actions/authActions'; // Import actions



// // import SideBar from "./components/sidebar";

// function App() {
//   // const [count, setCount] = useState(0);

//   // Use useSelector to access Redux state
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const userRole = useSelector(state => state.auth.userRole);

//   // Example of dispatching actions
//   const handleLogin = () => {
//     store.dispatch(loginSuccess('user')); // Dispatch login success action with user role
//   };

//   const handleLogout = () => {
//     store.dispatch(logoutSuccess()); // Dispatch logout success action
//   };

//   const handleSetUserRole = () => {
//     store.dispatch(setUserRole('admin')); // Dispatch set user role action
//   };

//   // async function fetchData() {
//   //   try {
//   //     const response = await fetch('/api/data'); // Replace with your actual API endpoint
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch data');
//   //     }
//   //     const data = await response.json();
//   //     localStorage.setItem('fetchedData', JSON.stringify(data));
//   //   } catch (err) {
//   //     console.error(err);
//   //     // Handle errors gracefully (e.g., display an error message to the user)
//   //   }
//   // }
  
//   // fetchData();
  

//   return (
//     // <>
//     //   <BrowserRouter>
//     //     <Routes>
//     //       <Route exact path="/" element={<Login />} />
//     //       <Route path="/signin" element={<SignIn />} />
//     //       <Route path="/dashboard" element={<Dashboard />} />
//     //       <Route path="/notifications" element={<Notifications />} />
//     //       <Route path="/tasks" element={<Tasks />} />
//     //       <Route path="/users" element={<User />} />
//     //       <Route path="/resetpass" element={<Resetpass />} />
//     //       {/* <Route path="/sidebar" element={<SideBar />} /> */}
//     //     </Routes>
//     //   </BrowserRouter>
//     // </>

// <>
// <Routes>
//   <Route exact path="/" element={<Login />} />
//   <Route path="/signin" element={<SignIn />} />
//   {isAuthenticated ? (
//     <>
//       {userRole === 'user' && (
//         <>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/resetpass" element={<Resetpass />} />
//         </>
//       )}
//       {userRole === 'admin' && (
//         <>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/users" element={<User />} />
//           <Route path="/resetpass" element={<Resetpass />} />
//         </>
//       )}
//     </>
//   ) : null}
// </Routes>
// </>


//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Pages/SignUp/Login';
import SignIn from './Pages/SignUp/SignIn';
import Dashboard from './Pages/SignUp/Dashboard';
import Notifications from './Pages/SignUp/Notifications';
import Tasks from './Pages/SignUp/Tasks';
import User from './Pages/SignUp/User';
import Resetpass from './Pages/SignUp/ResetPass';
import { createRoot } from 'react-dom/client';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userRole = useSelector(state => state.auth.userRole);

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      {isAuthenticated && (
        <>
          {userRole === 'user' && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/resetpass" element={<Resetpass />} />
            </>
          )}
          {userRole === 'admin' && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<User />} />
              <Route path="/resetpass" element={<Resetpass />} />
            </>
          )}
        </>
      )}
    </Routes>
  );
}

export default App;



