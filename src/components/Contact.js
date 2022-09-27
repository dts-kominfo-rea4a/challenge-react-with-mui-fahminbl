// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import './Contact.css';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
  return (
     <ListItem key={data.email} divider variant="inset" component="li" className='contact' alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={data.name} src={data.photo} />
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <React.Fragment>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            </React.Fragment>
          }
        />
    </ListItem>
    );
};




export default Contact;
