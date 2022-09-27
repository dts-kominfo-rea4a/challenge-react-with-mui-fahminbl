import './App.css';
import './components/Contact.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact'
import { useState } from 'react';
import List from '@mui/material/List';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
const [contacts, setContact] = useState(contactsJSON);
  const addContactHandler = (newContact) => {

    const objContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    const newContacts = [...contacts, objContact];
    setContact(newContacts);
  } 
  const contactList = contacts.map(data => {
    return (
      <Contact data={data}/>
      )
  })
  return (
    <div className="App">
      <Header />
        <div className='main'>
            <ContactForm addContactHandler={addContactHandler} />
            <List id='listcard' className='listcard'>
            {contactList}
            </List>
      </div>
    </div>
  );
};

export default App;
