import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';
import { useAuth } from 'hooks';

// MUI STYLES
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box sx={{ borderBottom: '2px solid #00f4ff' }}>
        <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '10px' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}        
        </Container>
      </Box>
    </header>
  );
};