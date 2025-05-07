import React, { useState } from 'react';
import Lightbox from './Lightbox';

const ImageGallery = () => {
  const images = [
    'https://via.placeholder.com/300x200.png?text=Image+1',
    'https://via.placeholder.com/300x200.png?text=Image+2',
    'https://via.placeholder.com/300x200.png?text=Image+3',
    'https://via.placeholder.com/300x200.png?text=Image+4'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            style={{ cursor: 'pointer', width: '300px', height: '200px', objectFit: 'cover' }}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />}
    </div>
  );
};

export default ImageGallery;