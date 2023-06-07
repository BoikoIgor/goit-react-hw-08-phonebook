import { contactsFilter } from 'Redux/filterSlice';
import { selectFilter } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          width: '50%',
        }}
      >
        Find contacts by name
        <input
          style={{ display: 'flex', marginBottom: '0.8rem', width: '40%' }}
          onChange={e => dispatch(contactsFilter(e.target.value))}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
