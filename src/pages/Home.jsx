import { Helmet, HelmetProvider } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Box sx={{ m: '80px 10px 50px auto', maxWidth: '500px', color: '#fff' }}>
        <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', color: '#00f4ff' }}>
          Create Your Phonebook
        </Typography>

        <Typography sx={{ mt: '45px' }}>
          Use our web application to access your contacts from any browser. Use it to make bulk edits, set-up an integration, or just get quick access to the contacts you need.
        </Typography>
        <Typography sx={{ mt: '20px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellat. Iusto, repellat architecto vitae blanditiis eligendi dolores modi? Nam, neque. Omnis aut eaque, provident amet voluptatum veniam voluptates incidunt accusamus!
        </Typography>      
        <Typography sx={{ mt: '20px' }}>        
          Quasi, quidem laboriosam odio, eos eum, voluptatibus voluptatem fugit sapiente aliquam exercitationem tempora cum eaque molestias omnis amet aspernatur magnam. Ullam ipsam, animi est velit vitae dicta ipsa sequi repudiandae.
        </Typography>
        <Typography sx={{ mt: '20px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellat. Iusto, repellat architecto vitae blanditiis eligendi dolores modi? Nam, neque. Omnis aut eaque, provident amet voluptatum veniam voluptates incidunt accusamus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, repellat. Iusto, repellat architecto vitae blanditiis eligendi dolores modi? Nam, neque. Omnis aut eaque, provident amet voluptatum veniam voluptates incidunt accusamus!
        </Typography> 
      </Box>
    </HelmetProvider>
  )
};

export default Home;