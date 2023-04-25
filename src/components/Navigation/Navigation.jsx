import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import Typography from '@mui/material/Typography';

export const Navigation = () => { 
  const { isLoggedIn } = useAuth();  

  return (
    <nav>      
        {isLoggedIn ? (
          <Typography sx={{ fontSize: '22px' }}>
            <NavLink to="/contacts">            
                Contacts            
            </NavLink>
          </Typography>
        ) : (
          <Typography sx={{ fontSize: '22px' }}>
            <NavLink to="/">            
                Home            
            </NavLink>
          </Typography>            
        )}
    </nav>
  );
};