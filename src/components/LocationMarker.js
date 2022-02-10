import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import caneIcon from '@iconify/icons-mdi/hurricane';
import bottleIcon from '@iconify/icons-mdi/bottle-wine';

export const FireMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='fire-marker' onClick={onClick}>
      <Icon icon={fireIcon} className='fire-icon' />
    </div>
  );
};
export const CaneMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='cane-marker' onClick={onClick}>
      <Icon icon={caneIcon} className='cane-icon' />
    </div>
  );
};
export const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='volcano-marker' onClick={onClick}>
      <Icon icon={bottleIcon} className='volcano-icon' />
    </div>
  );
};
