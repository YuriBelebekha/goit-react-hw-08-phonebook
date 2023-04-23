import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => { 
  const { isLoggedIn } = useAuth();  

  return (
    <nav>      
      {isLoggedIn ? (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      ) : (
        <NavLink to="/">
          Home
        </NavLink>
      )}
    </nav>
  );
};