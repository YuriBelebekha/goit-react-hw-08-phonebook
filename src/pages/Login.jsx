import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          m: '80px 10px 50px auto',
          maxWidth: '500px',
          color: '#fff'
      }}>
        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', color: '#00f4ff', mb: '45px' }}> 
          Login Form
        </Typography>

        <LoginForm />
      </Box>
    </HelmetProvider>
  )
};

export default Login;