import React from 'react';
import fireIcon from '@iconify/icons-mdi/fire-alert';
import caneIcon from '@iconify/icons-mdi/hurricane';
import bottleIcon from '@iconify/icons-mdi/bottle-wine';
import { Icon } from '@iconify/react';

const LegendInfoBox = () => {
  return (
    <div className='legend-info'>
      <h3 style={{ textAlign: 'center' }}>Legend Key</h3>
      <ul>
        <li>
          <Icon icon={fireIcon} className='fire-icon' /> : &nbsp;Wildfire
        </li>
        <li>
          <Icon icon={caneIcon} className='cane-icon' /> : &nbsp;Tropical Storm
        </li>
        <li>
          <Icon icon={bottleIcon} className='volcano-icon' /> : &nbsp;Volcano
        </li>
      </ul>
    </div>
  );
};

export default LegendInfoBox;
