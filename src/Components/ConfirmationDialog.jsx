import React from 'react';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      minWidth: '300px'
    }}>
      <p>{message}</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={onConfirm} style={{ marginRight: '10px' }}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>
);

export default ConfirmationDialog;