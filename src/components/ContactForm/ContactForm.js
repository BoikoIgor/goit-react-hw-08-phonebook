import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'Redux/selectors';
import { addContact } from '../../Redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();

    const uniqueName = name.toLowerCase().trim();
    const uniqueNumber = phone.toLowerCase().trim();

    if (
      allContacts.find(
        ({ name }) => name.toLocaleLowerCase().trim() === uniqueName
      )
    ) {
      alert(
        `Please enter another name. ${name} is already exists in your contacts`
      );
      return;
    }
    if (
      allContacts.find(
        ({ phone }) => phone.toLocaleLowerCase().trim() === uniqueNumber
      )
    ) {
      alert(
        `Please enter another number. ${phone} is already exists in your contacts`
      );
      return;
    }
    const id = nanoid();
    // const newContact = { name, phone, id };
    // addContact(newContact);
    dispatch(addContact({ name, phone, id }));
    setName('');
    setPhone('');
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        border: '0.1rem solid black',
        width: '50%',
        padding: '0.8rem',
      }}
    >
      <label
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        Name
        <input
          style={{ width: '40%' }}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1.5rem',
          gap: '0.5rem',
        }}
      >
        Number
        <input
          style={{ width: '40%' }}
          type="tel"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" style={{ marginTop: '1.5rem' }}>
        Add contact
      </button>
    </form>
  );
};
