import PropTypes from 'prop-types';
import { Formik } from 'formik';
import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../store/camper/selectors';

const Filters = ({ setPage, filters, setFilters }) => {
  const isLoading = useSelector(selectIsLoading);

  const equipmentFilterIcon = [
    { name: 'details_airConditioner', icon: 'icon-ac', sign: 'AC' },
    { name: 'transmission', icon: 'icon-engine', sign: 'Automatic' },
    { name: 'details_kitchen', icon: 'icon-kitchen', sign: 'Kitchen' },
    { name: 'details_TV', icon: 'icon-tv', sign: 'TV' },
    { name: 'details_shower', icon: 'icon-shower', sign: 'Shower/WC' },
  ];
  const formFilterIcon = [
    { value: 'panelTruck', icon: 'icon-paneltruck', sign: 'Van' },
    {
      value: 'fullyIntegrated',
      icon: 'icon-fullyintegrated',
      sign: 'Fully Integrated',
    },
    { value: 'alcove', icon: 'icon-alcove', sign: 'Alcove' },
  ];

  return (
    <>
      <Formik
        initialValues={{
          location: '',
          details_airConditioner: '',
          transmission: '',
          details_kitchen: '',
          details_TV: '',
          details_shower: '',
          form: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setPage(1);
          setFilters({ ...filters, values });
          setSubmitting(false);
        }}
        onReset={values => {
          values = {};
          setPage(1);
          setFilters(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className={css.filterBlock}>
              <label htmlFor="location" className={css.locationLabel}>
                Location
              </label>
              <div className={css.locationIconContainer}>
                <Icon
                  width={24}
                  height={24}
                  iconName="icon-map-pin"
                  styles={css.iconLocation}
                />
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.locationInput}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                />
              </div>
            </div>

            <div className={css.locationLabel}>Filters</div>
            <div className={css.filterBlock}>
              <p className={css.filterGroup}>Vehicle equipment</p>
              <div className={css.filters}>
                {equipmentFilterIcon.map(({ name, icon, sign }) => (
                  <div key={name}>
                    <input
                      className={css.filtrInput}
                      type="checkbox"
                      name={name}
                      id={name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      checked={values[name] === '' ? false : true}
                    />
                    <label htmlFor={name} className={css.filtrInputLabel}>
                      <div className={css.filterInputContent}>
                        <Icon
                          width={24}
                          height={24}
                          iconName={icon}
                          styles={css.iconFilter}
                        />
                        <span>{sign}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className={[css.filterBlock, css.filterBlockMargin].join(' ')}>
              <p className={css.filterGroup}>Vehicle type</p>
              <div className={css.filters}>
                {formFilterIcon.map(({ value, icon, sign }) => (
                  <div key={value}>
                    <input
                      type="radio"
                      id={`form-${value}`}
                      name="form"
                      className={css.filtrInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.form !== value ? false : true}
                      value={value}
                    />
                    <label
                      htmlFor={`form-${value}`}
                      className={css.filtrInputLabel}
                    >
                      <div className={css.filterInputContent}>
                        <Icon
                          width={24}
                          height={24}
                          iconName={icon}
                          styles={css.iconFilter}
                        />
                        <span>{sign}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <Button style="primary" type="submit" disabled={isSubmitting}>
              Search
            </Button>
            <Button style="outlined" type="reset">
              Reset
            </Button>
          </form>
        )}
      </Formik>
      {isLoading && <Loader />}
    </>
  );
};

export default Filters;

Filters.propTypes = {
  setPage: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};
