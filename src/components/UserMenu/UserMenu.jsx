import { useDispatch } from "react-redux";
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </>
  );
};