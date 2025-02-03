import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired, // children can be any valid React node
  onClick: PropTypes.func, // onClick should be a function
  type: PropTypes.string.isRequired, // type should be a string
};
