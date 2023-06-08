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
          marginTop: '1rem',
        }}
      >
        Find contact by name
        <input
          style={{
            display: 'flex',
          }}
          onChange={e => dispatch(contactsFilter(e.target.value))}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};
