import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from '../../Button/Button';
import css from './BookForm.module.css';

const BookForm = props => {
  return (
    <div className={css.bookFormArea}>
      <h2 className={css.bookTitle}>Book your campevan now</h2>
      <p className={css.bookText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validate={values => {
          const errors = {};
          if (!values.name.trim() || values.name.length < 2) {
            errors.name = 'Name is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.date) {
            errors.date = 'Date is required';
          } else if (!/^d{4}-d{2}-d{2}$/i.test(values.date)) return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={css.fieldContainer}>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className={css.bookField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <span className={css.inputError}>{errors.name}</span>
              )}
            </div>
            <div className={css.fieldContainer}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={css.bookField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <span className={css.inputError}>{errors.email}</span>
              )}
            </div>
            <div className={css.fieldContainer}>
              <input
                type="date"
                name="date"
                placeholder="Booking date"
                className={css.bookField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              {errors.date && touched.date && (
                <span className={css.inputError}>{errors.date}</span>
              )}
            </div>
            <div className={css.fieldContainer}>
              <textarea
                type="comment"
                name="comment"
                placeholder="Comment"
                className={css.bookTextField}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              ></textarea>
              {errors.comment && touched.comment && (
                <span className={css.inputError}>{errors.comment}</span>
              )}
            </div>
            <Button style="primary" type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;

BookForm.propTypes = {
  name: PropTypes.string,
};
