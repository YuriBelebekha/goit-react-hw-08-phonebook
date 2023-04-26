import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

// MUI STYLES
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;    
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );    
    form.reset();
  };  

  return (
    <Box component="form" onSubmit={handleSubmit} autoComplete="off">
      <CssTextField id="outlined-basic"
        type="text"
        name="name"
        label="Name"
        variant="outlined" 
        size="small"
        fullWidth        
      />
      
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
          endIcon={<SendOutlinedIcon />}
        >
          Register
        </Button>        
      </Stack>      
    </Box>
  );
};