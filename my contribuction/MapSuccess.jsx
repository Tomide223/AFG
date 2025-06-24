import React from 'react';
import MapYourSuccess from './MapYourSuccess';

const MapSuccess = () => {
  return (
    <div className="relative">
      <MapYourSuccess />
      <style>
        {`
          #discover-btn {
            position: absolute;
            top: 10px;
            right: 0;
          }

          @media (max-width: 768px) {
            #discover-btn {
              position: static;
              margin-top: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MapSuccess;
