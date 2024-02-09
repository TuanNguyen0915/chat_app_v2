import Login from "./pages/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
const App = () => {
  const { authUser } = useAuthContext();
  return (
    <main className="flexCenter mx-auto h-screen max-w-[1440px]">
      <Routes>
        <Route
          path="*"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster position="top-right" />
    </main>
  );
};

export default App;
