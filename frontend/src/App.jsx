import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
const App = () => {
  return (
    <main className="flexCenter mx-auto h-screen max-w-[1440px]">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
