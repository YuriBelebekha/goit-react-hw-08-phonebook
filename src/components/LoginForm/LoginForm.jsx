import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';

const CssTextField = styled(TextField)({    
  '& label': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#00f4ff',
  },  
  '& .MuiOutlinedInput-root': {
    '&': {      
      color: '#fff',       
      marginBottom: '30px',
    },
    '& fieldset': {
      borderColor: '#fff',      
    },
    '&:hover fieldset': {
      borderColor: '#00f4ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00f4ff',
    },
  },
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} autoComplete="off">      
      <CssTextField id="outlined-basic"
        type="email"
        name="email"
        label="Email"
        variant="outlined" 
        size="small"
        fullWidth        
      />

      <CssTextField id="outlined-basic"
        type="password"
        name="password"
        label="Password"
        variant="outlined" 
        size="small"
        fullWidth        
      />      

      <Stack direction="row" spacing={2} color='#fff' mr='24px'>
        <Button
          type="submit"          
          color="inherit"          
          variant="outlined"
          endIcon={<LoginIcon />}
        >
          Login
        </Button>        
      </Stack>      
    </Box>    
  );
};