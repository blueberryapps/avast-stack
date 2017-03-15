import React, { PropTypes as RPT } from 'react';

const TextField = ({ name, value, onChange, onBlur, onFocus, error, label, type }) => (
  <div>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      type={type}
    />
    {error && <b className="error">{error}</b>}
  </div>
);

TextField.defaultProps = {
  type: 'text'
};

TextField.propTypes = {
  error: RPT.string,
  label: RPT.string,
  name: RPT.string.isRequired,
  onBlur: RPT.func,
  onChange: RPT.func.isRequired,
  onFocus: RPT.func,
  type: RPT.oneOf(['text', 'password']),
  value: RPT.oneOfType([RPT.string, RPT.bool, RPT.number]).isRequired,
};

export default TextField;
