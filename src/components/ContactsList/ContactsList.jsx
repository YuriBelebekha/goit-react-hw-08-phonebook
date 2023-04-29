import ContactsListItem from '../ContactsListItem/ContactsListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getFilter } from 'redux/filterSlice';

import Box from '@mui/material/Box';
// import List from '@mui/material/List';
import { Virtuoso } from 'react-virtuoso';

const ContactsList = () => {  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(getFilter);  
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {        
    const normalizedFilter = filter.toLowerCase();
    
    if (contacts) {
      return contacts.filter(contact => 
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };  
  
  // console.log(getFilteredContacts())

  return (
    <Box
      component="ul"
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', m: '0 10px 0 auto', maxWidth: '500px', color: '#fff' }}
    >
      {isLoading && <b>Refreshing contacts...</b>}

      {contacts &&
        <Virtuoso          
          style={{ height: '190px' }}
          totalCount={contacts.length}
          itemContent={() => getFilteredContacts().map(contact => (    
            <ContactsListItem key={contact.id} {...contact} /> 
          ))}
        />
      }
    </Box>
  )
};

export default ContactsList;