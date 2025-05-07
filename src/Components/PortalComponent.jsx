import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
  const portalNodeRef = useRef(null);

  useEffect(() => {
    if (portalNodeRef.current) {
      console.log(portalNodeRef.current);
    }
  }, []);

  return ReactDOM.createPortal(
    <div ref={portalNodeRef} style={{ padding: '20px', background: '#f0f0f0',border:"1px solid red",textAlign:'center' }}>
     <h1>Task12</h1>
      This content is rendered via a portal.
    </div>,
    document.getElementById('portal-root')
  );
};

export default PortalComponent;