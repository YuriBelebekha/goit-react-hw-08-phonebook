import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <h1>Log In Form</h1>

      <LoginForm />
    </HelmetProvider>
  )
};

export default Login;