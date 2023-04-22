import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export const Contacts = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  )
};