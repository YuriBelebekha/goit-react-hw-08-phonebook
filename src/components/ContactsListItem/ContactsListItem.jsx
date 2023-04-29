import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// MUI STYLES
import ListItem from "@mui/material/ListItem";
import Tooltip from '@mui/material/Tooltip';
import ListItemText from "@mui/material/ListItemText";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';

const ContactsListItem = ({ id, name, number }) => {  
  const dispatch = useDispatch();
  const deleteContactData = (id) => dispatch(deleteContact(id));

  const [isDeleting, setIsDeleting] = useState(false);

  const onClickDeleteContact = () => {
    setIsDeleting(true);
    deleteContactData(id)
      .then((response) => {
        if (response.error) {
          toast.error(`Contact wasn't deleted: ${response.payload}`, ToastOptions);
        } else {
          toast.info(`Contact ${name.toUpperCase()} was deleted`, ToastOptions);
        };
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };
  
  return (    
    <ListItem
      secondaryAction={
        <Tooltip title="Delete contact" placement="left-start">
          <IconButton
            onClick={onClickDeleteContact}
            disabled={isDeleting}
            aria-label="delete"
            sx={{ color: "#c9c9c9", boxShadow: 3, border: 1, borderColor: "orange" }}
          >
            {isDeleting
              ? <AutoDeleteIcon sx={{ color: "orange" }} />
              : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      }
    >          
      <ListItemText>{name} - &#9743; {number}</ListItemText>          
    </ListItem >    
  )
};

export default ContactsListItem;