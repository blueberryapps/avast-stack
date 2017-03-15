import React, { PropTypes as RPT } from 'react';
import './style.css';

const resolveClass = (...classes) => classes.filter(c => !!c).join(' ');

const Button = ({ disabled, kind, children, onClick }) => (
  <button
    className={resolveClass('button', `button-${kind}`, disabled && 'button-disabled')}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  kind: 'primary'
};

Button.propTypes = {
  disabled: RPT.bool,
  children: RPT.node,
  kind: RPT.oneOf(['primary', 'secondary']),
  onClick: RPT.func
};

export default Button;
