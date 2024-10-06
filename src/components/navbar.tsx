import { useAuth } from '@/features/auth/hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const [isHide, setIsHide] = useState(false);
  const { logoutUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/auth/login');
  };

  useEffect(() => {
    setIsHide(
      location.pathname === '/auth/login' ||
        location.pathname === '/auth/register'
    );
  }, [location.pathname]);

  return (
    <>
      {!isHide && (
        <nav className="w-full shadow-lg bg-gray-50">
          <div className="min-h-16 max-w-sm mx-auto md:max-w-2xl xl:max-w-6xl flex justify-between items-center">
            <Link
              to="/"
              className="font-sans font-bold text-2xl bg-gradient-to-r to-black from-indigo-300 bg-clip-text text-transparent hover:text-black transition-colors duration-500 ease-in-out"
            >
              Quizzyy
            </Link>
            <Button
              onClick={handleLogout}
              variant={'ghost'}
              size="icon"
              className="hover:text-red-500 transition-colors duration-300 ease-in-out"
            >
              <LogOut />
            </Button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
