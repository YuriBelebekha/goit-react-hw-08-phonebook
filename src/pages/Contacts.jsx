import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </HelmetProvider>
  )
};

export default Contacts;