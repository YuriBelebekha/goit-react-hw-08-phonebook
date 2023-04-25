import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar';

import { Wrapper } from './Layout.styled';
import Container from '@mui/material/Container';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      
      <Container >      
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <ToastContainer />
      </Container>
    </Wrapper>
  );
};