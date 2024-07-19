import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import css from './ModalWindow.module.css';

const ModalWindow = ({ children, isOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <button onClick={closeModal} className={css.closeBtn}>
          <Icon
            iconName="icon-close"
            width={32}
            height={32}
            styles={css.closeIcon}
          />
        </button>
        <div className={css.modalContent}>{children}</div>
      </Modal>
    </div>
  );
};
Modal.setAppElement('#root');

export default ModalWindow;

ModalWindow.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  customStyles: PropTypes.object,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};
