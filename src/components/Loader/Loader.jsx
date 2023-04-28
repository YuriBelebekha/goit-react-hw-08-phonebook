import { Watch } from 'react-loader-spinner';

// MUI STYLES
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Loader = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px' }}>
      <Watch
        width='60'        
        color='orange'
      />
      
      <Typography
        variant='h5'
        component='p'
        sx={{ ml: '10px', fontWeight: 'bold', color: '#00f4ff' }}
      >
        Refreshing User Page...
      </Typography>      
    </Box>
  );
};