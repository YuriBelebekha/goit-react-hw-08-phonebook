import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <h1>Registration Form</h1>

      <RegisterForm />
    </HelmetProvider>
  )
};

export default Register;