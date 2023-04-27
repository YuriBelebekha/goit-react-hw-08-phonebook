import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContactForm />
      <Filter />      
      <ContactsList />
    </HelmetProvider>
  )
};

export default Contacts;