import { useDispatch } from "react-redux";
import { logout } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user: { name } } = useAuth();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Stack direction="row" alignItems="center" spacing={-2} color='orange' mr='24px'>
        <Typography sx={{ mr: '20px', fontSize: '22px', color: '#00f6ff' }}>
          {name}
        </Typography>
        
        <AccountCircleOutlinedIcon />
      </Stack>

      <Stack direction="row" spacing={2} color='#fff' mr='24px'>
        <Button
          type="button"
          onClick={handleClick}
          color="inherit"          
          variant="outlined"
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>        
      </Stack>      
    </Box>
  );
};