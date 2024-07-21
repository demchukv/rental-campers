import { PropTypes } from 'prop-types';
import { useState } from 'react';
import Icon from '../../Icon/Icon';
import css from './ImageView.module.css';

const ImageView = ({ images, imageIndex }) => {
  const [currentImage, setCurrentImage] = useState(imageIndex);
  const showPrevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  const showNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  return (
    <>
      {Array.isArray(images) && images.length > 0 && (
        <div className={css.imageView}>
          <div className={css.back} onClick={showPrevImage}>
            <Icon
              width={20}
              height={60}
              iconName="icon-arrow-prev"
              styles={css.icon}
            />
          </div>
          <div className={css.imageContainer}>
            <img className={css.image} src={images[currentImage]}></img>
          </div>
          <div className={css.next} onClick={showNextImage}>
            <Icon
              width={46}
              height={46}
              iconName="icon-arrow-next"
              styles={css.icon}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageView;

ImageView.propTypes = {
  images: PropTypes.array,
  imageIndex: PropTypes.number,
};
