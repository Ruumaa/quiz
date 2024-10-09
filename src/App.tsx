import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAuthStore } from './features/auth/hooks/authStore';
import Register from './pages/Register';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/navbar';
import Quiz from './pages/Quiz';
import { Toaster } from './components/ui/toaster';

export default function App() {
  const { isLoggedIn } = useAuthStore();

  return (
    <Router>
      <Navbar />
      <MainLayout>
        <Routes>
          <Route
            path="/auth/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/auth/login" />}
          />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/quiz"
            element={isLoggedIn ? <Quiz /> : <Navigate to="/auth/login" />}
          />
        </Routes>
      </MainLayout>
      <Toaster />
    </Router>
  );
}
