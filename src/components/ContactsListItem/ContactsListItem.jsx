import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// MUI STYLES
// import { FixedSizeList } from 'react-window';
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";

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
        <IconButton
          onClick={onClickDeleteContact}
          disabled={isDeleting}
          aria-label="delete"
          sx={{ color: "#c9c9c9", boxShadow: 3, border: 1, borderColor: "orange" }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >          
      <ListItemText>{name} - &#9743; {number}</ListItemText>          
    </ListItem >        
  )
};

export default ContactsListItem;





// const ContactsListItem = ({ id, name, number }) => {
//   const dispatch = useDispatch();
//   const deleteContactData = (id) => dispatch(deleteContact(id));

//   const [isDeleting, setIsDeleting] = useState(false);

//   const onClickDeleteContact = () => {
//     setIsDeleting(true);
//     deleteContactData(id)
//       .then((response) => {
//         if (response.error) {
//           toast.error(`Contact wasn't deleted: ${response.payload}`, ToastOptions);
//         } else {
//           toast.info(`Contact ${name.toUpperCase()} was deleted`, ToastOptions);
//         };
//       })
//       .finally(() => {
//         setIsDeleting(false);
//       });
//   };
  
//   return (
//     <Box
//       component="form"
//       autoComplete="off"
//       sx={{ display: 'flex', m: '0 10px 30px auto', maxWidth: '500px', color: '#fff' }}
//     >
//       <li>
//         <p>{name} - &#9743; {number}</p>
//         <div>
//           <button
//             type='button'
//             onClick={onClickDeleteContact}
//             disabled={isDeleting}
//           >
//             {isDeleting ? 'Deleting...' : 'Delete'}
//           </button>
//         </div>
//       </li>
//     </Box>
//   )
// };

// export default ContactsListItem;



// {/* <ListItem          
//   secondaryAction={
//     <IconButton
//       disabled={isDeleting}
//       onClick={onClickDeleteContact}
//     >
//       <DeleteIcon />
//     </IconButton>}
// >        
//   <ListItemText primary={`${name} - ${number}`} />         
// </ListItem> */}