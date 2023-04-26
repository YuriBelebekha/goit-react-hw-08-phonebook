import { useDispatch, useSelector } from "react-redux";
import { setFilter, getFilter } from 'redux/filterSlice';

// MUI STYLES
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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

const Filter = () => {
  const dispatch = useDispatch();  
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(
      setFilter(e.target.value)
    );
  };

  return (
    <Box
      component="form"      
      autoComplete="off"
      sx={{ m: '0 10px 0 auto', maxWidth: '500px', color: '#fff' }}
    >
      <Typography variant='h6' component='h2' sx={{ color: 'orange', mb: '20px' }}> 
        Find contacts by name
      </Typography>

      <CssTextField id="outlined-basic"
        type="text"
        value={filter}
        onChange={onChangeFilter}      
        variant="outlined" 
        size="small"
        fullWidth
        required
      />      
    </Box>
  )
};

export default Filter;