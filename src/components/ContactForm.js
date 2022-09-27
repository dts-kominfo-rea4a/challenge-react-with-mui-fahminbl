// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import './ContactForm.css'
import { useState } from 'react'
import { Card, TextField, Button } from '@mui/material'
const ContactForm = ({ addContactHandler }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
const [inputContact, setInputContact] = useState({
    name: '',
    phone: '',
    email: '',
    photo: '',
});
    const inputOnchangeHandler = (event) => {
        setInputContact({
            ...inputContact,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        addContactHandler(inputContact);
        setInputContact({
        name: '',
        phone: '',
        email: '',
        photo: '',
        });
    }
    return (
        <form onSubmit={onSubmitFormHandler} style={{width: '35%'}}>
        <Card id='form-card' className='form-card' variant="outlined">
        <TextField sx={{marginBottom: '20px'}} className='form-input' label="Name" name="name" variant="outlined" value={inputContact.name} onChange={inputOnchangeHandler} />
        <TextField sx={{marginBottom: '20px'}} className='form-input' label="Phone" name="phone"variant="outlined" value={inputContact.phone} onChange={inputOnchangeHandler} />
        <TextField sx={{marginBottom: '20px'}} className='form-input' label="Email" name="email" variant="outlined" value={inputContact.email} onChange={inputOnchangeHandler} />
        <TextField sx={{marginBottom: '20px'}} className='form-input' label="Photo URL" name="photo" variant="outlined" value={inputContact.photo} onChange={inputOnchangeHandler} />
        <Button type="submit" id='submit-button' sx={{backgroundColor: '#EE175A'}} className='submit-button' variant="contained">Add New</Button>
        </Card> 
        </form>
    );
}

export default ContactForm;
