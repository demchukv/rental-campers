import PropTypes from 'prop-types';
import Badge from '../../Badge/Badge';
import { firstToUpper } from '../../../helpers/string';
import css from './Features.module.css';

const Features = props => {
  return (
    <>
      <div className={css.featuresContauner}>
        <Badge icon="icon-adults">{props.adults} adults</Badge>
        <Badge icon="icon-transmission">
          {firstToUpper(props.transmission)}
        </Badge>
        {props.details.airConditioner > 0 && <Badge icon="icon-ac">AC</Badge>}
        <Badge icon="icon-engine">{firstToUpper(props.engine)}</Badge>
        {props.details.kitchen > 0 && (
          <Badge icon="icon-kitchen">Kitchen</Badge>
        )}
        {props.details.beds > 0 && (
          <Badge icon="icon-beds">{props.details.beds} beds</Badge>
        )}
        {props.details.TV > 0 && <Badge icon="icon-tv">TV</Badge>}
        {props.details.CD > 0 && <Badge icon="icon-cd">CD</Badge>}
        {props.details.radio > 0 && <Badge icon="icon-radio">Radio</Badge>}
        {props.details.hob > 0 && (
          <Badge icon="icon-hob">{props.details.hob} hob</Badge>
        )}
        {props.details.shower > 0 && (
          <Badge icon="icon-shower">{props.details.shower} shower</Badge>
        )}
        {props.details.toilet > 0 && (
          <Badge icon="icon-toilet">{props.details.toilet} toilet</Badge>
        )}
        {props.details.freezer > 0 && (
          <Badge icon="icon-freezer">{props.details.freezer} freezer</Badge>
        )}
        {props.details.microwave > 0 && (
          <Badge icon="icon-microwave">
            {props.details.microwave} microwave
          </Badge>
        )}
      </div>

      <h3 className={css.detailsTitle}>Vehicle details</h3>

      <div className={css.featuresDetails}>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Form</div>
          <div className={css.featuresValue}>{firstToUpper(props.form)}</div>
        </div>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Length</div>
          <div className={css.featuresValue}>{props.length}</div>
        </div>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Width</div>
          <div className={css.featuresValue}>{props.width}</div>
        </div>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Height</div>
          <div className={css.featuresValue}>{props.height}</div>
        </div>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Tank</div>
          <div className={css.featuresValue}>{props.tank}</div>
        </div>
        <div className={css.featuresRow}>
          <div className={css.featuresName}>Consumption</div>
          <div className={css.featuresValue}>{props.consumption}</div>
        </div>
      </div>
    </>
  );
};

export default Features;

Features.propTypes = {
  details: PropTypes.object,
  adults: PropTypes.number,
  transmission: PropTypes.string,
  engine: PropTypes.string,
  form: PropTypes.string,
  length: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  tank: PropTypes.string,
  consumption: PropTypes.string,
};
