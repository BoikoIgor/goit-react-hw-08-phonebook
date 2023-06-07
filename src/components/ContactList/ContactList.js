import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from 'Redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/operations';

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
    <ul>
      {isLoading && <div>Loading...</div>}
      {!filterContacts?.length && !error && !isLoading && (
        <div>Not found. Try something else</div>
      )}
      {error && <div>{error}</div>}

      {filterContacts.map(({ id, name, phone }) => (
        <li key={id} style={{ marginBottom: '0.5rem' }}>
          {name}:{' '}
          <span>
            <b>{phone}</b>
          </span>
          <button
            style={{ marginLeft: '0.7rem', fontSize: '0.7rem' }}
            type="button"
            onClick={() => onDelContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
