import { NavLink } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={{ ml: '25px', fontSize: '22px' }}>
        <NavLink to="/register">
            Register
        </NavLink>
      </Typography>
      
      <Typography sx={{ ml: '25px', fontSize: '22px' }}>
        <NavLink to="/login">
            Login
        </NavLink>
      </Typography>
    </Box>
  );
};