import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from 'Redux/contacts/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/contacts/operations';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Contacts</h2>
      <ul>
        {isLoading && <div>Loading...</div>}
        {!filterContacts?.length && !error && !isLoading && (
          <div>Not found. Try something else</div>
        )}
        {error && <div>{error}</div>}

        {filterContacts.map(({ id, name, phone }) => (
          <li
            key={id}
            style={{
              marginBottom: '0.5rem',
              width: 'max-content',
              display: 'grid',
              grid: 'auto-flow / 3fr 2fr 1fr',
            }}
          >
            {name}: <b style={{ marginLeft: '0.3rem' }}>{phone}</b>
            <button
              style={{
                margin: '0 0.7rem',
                fontSize: '0.7rem',
              }}
              type="button"
              onClick={() => onDelContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
