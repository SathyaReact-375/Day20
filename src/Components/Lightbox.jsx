import React from 'react';
import ReactDOM from 'react-dom';

const Lightbox = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Lightbox"
        style={{ maxWidth: '90%', maxHeight: '90%' }}
        onClick={e => e.stopPropagation()}
      />
    </div>,
    document.getElementById('portal-root')
  );
};

export default Lightbox;