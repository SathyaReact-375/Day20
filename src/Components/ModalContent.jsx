import React from 'react';
import ImageGallery from './ImageGallery';

function ModalContent({ message }) {
  return (
    <div style={{ 
      background: 'white', 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
      textAlign:'center'
    }}> 
        <h1>Task13</h1>
      <h2>Modal Title</h2>
      <p>{message}</p>
      <div>
        <h1>Miniproject2</h1>
    <h1>Image Gallery with Lightbox</h1>
    <ImageGallery />
  </div>

    </div>
  );
}

export default ModalContent;