import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

import shortid from 'shortid';
// TOAST
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// MUI STYLES
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
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

function ContactForm() {  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const addContactData = data => { dispatch(addContact(data)) };
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');  
  
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    
    switch (name) {      
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    };    
  };  

  const handleSubmit = e => {
    e.preventDefault(); 
    const form = e.currentTarget;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };    
    
    const checkDuplicateContact = contacts.some(contact =>
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    
    if (checkDuplicateContact) {
      return toast.error(`${name.toUpperCase()} is already in contacts`, ToastOptions);
    };

    if (!checkDuplicateContact) {      
      toast.success(`${name.toUpperCase()} added to phonebook`, ToastOptions);          
      addContactData(contact);      
    } else {
      toast.error('Something went wrong... :(', ToastOptions);
    }
    
    setName('');
    setNumber('');    
    form.reset();
  };
  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      sx={{ m: '80px 10px 30px auto', maxWidth: '500px', color: '#fff' }}
    >
      <Typography variant='h5' component='h1' sx={{ fontWeight: 'bold', color: '#00f4ff', mb: '30px' }}> 
        Add Contact Form
      </Typography>

      <CssTextField
        id="outlined-basic"
        type="text"
        name="name"        
        label="Name"
        onChange={handleChange}        
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        inputProps={{ pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }}
        variant="outlined" 
        size="small"
        fullWidth
        required
      />
      
      <CssTextField
        id="outlined-basic"
        type="tel"
        name="number"        
        label="Number"
        onChange={handleChange}  
        inputProps={{ pattern: "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}" }}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        variant="outlined" 
        size="small"
        fullWidth
        required
      />           

      <Stack direction="row" spacing={2} color='#fff' mr='24px'>
        <Button
          type="submit"          
          color="inherit"          
          variant="outlined"
          endIcon={<AddIcon />}
        >
          Add Contact
        </Button>        
      </Stack>      
    </Box>
  )
}

export default ContactForm;