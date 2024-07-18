import css from './Filters.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { getFilters, getResetFilters } from '../../store/camper/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../store/camper/selectors';
import { useState } from 'react';

const Filters = () => {
  const dispatch = useDispatch();
  const storedFilters = useSelector(selectFilters);
  const [filters, setFilters] = useState(storedFilters);

  const equipmentFilterIcon = [
    { name: 'airConditioner', icon: 'icon-ac', sign: 'AC' },
    { name: 'transmission', icon: 'icon-engine', sign: 'Automatic' },
    { name: 'kitchen', icon: 'icon-kitchen', sign: 'Kitchen' },
    { name: 'TV', icon: 'icon-tv', sign: 'TV' },
    { name: 'shower', icon: 'icon-shower', sign: 'Shower/WC' },
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

  const handleClick = () => {
    const name = event.target.name;
    const value =
      event.target.value === event.target.name
        ? event.target.checked
        : event.target.value;
    dispatch(getFilters({ name, value }));
    setFilters({ ...filters, [name]: value });
  };

  const handleResetFilters = () => {
    dispatch(getResetFilters());
    setFilters({ location: '' });
  };

  return (
    <>
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
            value={filters?.location}
            onChange={handleClick}
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
                value={name}
                id={name}
                checked={filters[name] ? true : false}
                onChange={() => handleClick()}
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
                className={css.filtrInput}
                type="radio"
                name="form"
                id={`form-${value}`}
                value={value}
                checked={
                  filters['form'] && filters['form'] === value
                    ? filters['form']
                    : false
                }
                onChange={() => handleClick()}
              />
              <label htmlFor={`form-${value}`} className={css.filtrInputLabel}>
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
      <Button handler={handleResetFilters}>Reset</Button>
    </>
  );
};

export default Filters;
