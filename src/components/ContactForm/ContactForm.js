import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'Redux/contacts/selectors';
import { addContact } from '../../Redux/contacts/operations';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();

    const uniqueName = name.toLowerCase().trim();
    const uniqueNumber = number.toLowerCase().trim();

    if (
      allContacts.find(
        ({ name }) => name.toLocaleLowerCase().trim() === uniqueName
      )
    ) {
      toast.warn(
        `Please enter another name. ${name} is already exists in your contacts `
      );
      return;
    }
    if (
      allContacts.find(
        ({ number }) => number.toLocaleLowerCase().trim() === uniqueNumber
      )
    ) {
      toast.warn(
        `Please enter another number. ${number} is already exists in your contacts `
      );
      return;
    }
    dispatch(addContact({ name, number })).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        setName('');
        setNumber('');
        return;
      }
      toast.error(`Something went wrong. Сontact ${name} was not added`);
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        border: '0.1rem solid black',
        borderRadius: '0.5rem',
        marginTop: '0.5rem',
        padding: '1rem',
        position: 'relative',
      }}
    >
      <label
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        Name
        <input
          style={{ maxWidth: '70%' }}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength="20"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1rem',
          gap: '0.5rem',
        }}
      >
        Phone
        <input
          style={{ maxWidth: '70%' }}
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          maxLength="12"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button
        type="submit"
        style={{
          padding: '0.5rem',
          marginTop: '1rem',
          // width: 'max-content',
          width: '6.3rem',
          height: '5.8rem',
          position: 'absolute',
          top: '1.6rem',
          right: '1rem',
        }}
      >
        Add contact
      </button>
    </form>
  );
};
