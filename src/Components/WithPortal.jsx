import React from 'react';
import ReactDOM from 'react-dom';

function WithPortal(WrappedComponent) {
  return function PortalWrapper(props) {
    return ReactDOM.createPortal(
      <WrappedComponent {...props} />,
      document.getElementById('portal-root')
    );
  };
}

export default WithPortal;