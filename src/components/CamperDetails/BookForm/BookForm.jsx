import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../Button/Button';
import css from './BookForm.module.css';

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.date()
    .min(new Date(), 'Date cannot be this early')
    .required('Date is required'),
});

const BookForm = props => {
  return (
    <div className={css.bookFormArea}>
      <h2 className={css.bookTitle}>Book your campevan now</h2>
      <p className={css.bookText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          id: props._id,
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={bookingSchema}
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
            <input type="hidden" name="id" value={values.id} />
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
  _id: PropTypes.string,
};
