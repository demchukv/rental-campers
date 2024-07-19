import PropTypes from 'prop-types';
import css from './CamperDetails.module.css';

const CamperDetails = props => {
  return (
    <>
      <div className={css.camperHeader}>
        <h2 className={css.camperName}>{props.name}</h2>
      </div>
      <div className={css.camperMain}>
        <div className={css.camperGallery}></div>
        <div className={css.camperInfo}>
          <div className={css.camperDescription}>{props.description}</div>
          <div className={css.camperTabs}></div>
        </div>
      </div>
    </>
  );
};

export default CamperDetails;

CamperDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
