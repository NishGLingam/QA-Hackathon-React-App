import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LeftSVGComponent } from '../../images/left-arrow.svg';
import Pic1 from '../../images/pic1.png';
import Pic2 from '../../images/pic2.png';
import Pic3 from '../../images/pic3.png';

    const photoArray = [Pic1, Pic2, Pic3];
    const photoLength = photoArray.length;

    const PhotoGallery = () => {
        const [photoIndex, setPhotoIndex] = useState(0);
      
        const photoIndexIncreaser = () => {
          setPhotoIndex(photoIndex + 1);
        };
      
        const photoIndexDecreaser = () => {
          if (photoIndex === 0) {
            setPhotoIndex(photoLength - 1);
          } else {
            setPhotoIndex(photoIndex - 1);
          }
        };
      
        const previewSwitchHandler = (index) => {
          setPhotoIndex(index);
        };
      
        return (
          <div className="photo-gallery-container">

            <div className="photo-gallery-carousel">
              <LeftSVGComponent onClick={photoIndexDecreaser} className="carousel-button-left noSelect" />
              <NavLink to="/groups">
                <img src={photoArray[photoIndex % photoLength]} alt="ProjectImage" className="photo-gallery-main noSelect" />
              </NavLink>
              <LeftSVGComponent onClick={photoIndexIncreaser} className="carousel-button-right noSelect" />
            </div>
            <div className="preview-container">
              {photoArray.map((ele) => (
                <img
                  src={ele}
                  alt="preview"
                  key={photoArray.indexOf(ele)}
                  className={photoArray.indexOf(ele) === photoIndex % photoLength ? 'preview-image-border' : 'preview-image'}
                  onClick={() => previewSwitchHandler(photoArray.indexOf(ele))}
                />
              ))}
            </div>
          </div>
      
        );
      };

export default PhotoGallery;