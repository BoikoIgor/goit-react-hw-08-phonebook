import { selectContacts, selectFilter } from 'Redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contacts/operations';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Contacts</h2>
      {contacts.length === 0 && (
        <p>You don't have any contacts. Please add some...</p>
      )}
      <ul>
        {contacts
          ?.filter(item =>
            item.name.toLowerCase().includes(filterContacts.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li
              key={id}
              style={{
                marginBottom: '0.5rem',
                width: 'max-content',
                display: 'grid',
                grid: 'auto-flow / 3fr 2fr 1fr',
              }}
            >
              {name}: <b style={{ marginLeft: '0.3rem' }}>{number}</b>
              <button
                style={{
                  margin: '0 0.7rem',
                  fontSize: '0.7rem',
                }}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
