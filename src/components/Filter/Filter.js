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
          // width: '50%',
        }}
      >
        Find contact by name
        <input
          style={{
            display: 'flex',
            // marginBottom: '0.8rem',
            // width: '70% - 1rem',
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
