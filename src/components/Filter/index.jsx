import React from 'react'
import s from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter = ({ onChangefilter }) => {
  const { value } = PropTypes;

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type='text'
        name='filter'
        placeholder='Find contacts by name'
        value={value}
        onChange={onChangefilter}
      ></input>
    </label >
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Filter;
