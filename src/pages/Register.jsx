import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

// MUI STYLES
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Register = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          m: '80px 10px 50px auto',
          maxWidth: '500px',
          color: '#fff'
      }}>
        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', color: '#00f4ff', mb: '45px' }}> 
          Registration Form
        </Typography>

        <RegisterForm />
      </Box>
    </HelmetProvider>
  )
};

export default Register;