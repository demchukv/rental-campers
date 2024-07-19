import PropTypes from 'prop-types';
import css from './BookForm.module.css';

const BookForm = props => {
  return <div>BookForm {props.name}</div>;
};

export default BookForm;

BookForm.propTypes = {
  name: PropTypes.string,
};
