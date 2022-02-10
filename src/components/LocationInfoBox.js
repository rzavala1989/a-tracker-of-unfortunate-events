import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import close from '@iconify/icons-mdi/close-circle';

const LocationInfoBox = ({ info, onClick }) => {
  return (
    <div className='location-info'>
      <h3>Event Location Info</h3>
      <Icon icon={close} className='close-icon' onClick={onClick} />
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
