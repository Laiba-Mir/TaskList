// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/SignUp/Login";
import SignIn from "./Pages/SignUp/SignIn";
import Dashboard from "./Pages/SignUp/Dashboard";
// import SideBar from "./components/sidebar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/sidebar" element={<SideBar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
