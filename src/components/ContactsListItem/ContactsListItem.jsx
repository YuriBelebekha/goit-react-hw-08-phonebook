import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';

// MUI STYLES
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from 'react-window';

import DeleteIcon from "@mui/icons-material/Delete";

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContactData = (id) => dispatch(deleteContact(id));

  console.log(id)
  console.log(name)
  console.log(number)
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
  

  function renderRow() {
    

      return (        
        <ListItem component="div" disablePadding>        
          <ListItemText primary={`${name} - ${number}`} />        
        </ListItem>        
      );
  }
  
  return (  
    <Box                   
      sx={{
        display: 'flex',
        m: '0 10px 30px auto',
        width: '100%',
        height: 220,
        maxWidth: 500,
        // bgcolor: 'background.paper',
        color: '#fff'
      }}      
    >
      {/* <li>
        <p>{name} - &#9743; {number}</p>
        
          <button
            type='button'
            onClick={onClickDeleteContact}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        
      </li> */}
      <FixedSizeList
        height={220}
        width={500}
        itemSize={40}
        itemCount={10}
        overscanCount={10}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
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