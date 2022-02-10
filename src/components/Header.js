import { Icon } from '@iconify/react';
import infoIcon from '@iconify/icons-mdi/information';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Header = () => {
  const handleClick = () => {
    confirmAlert({
      title: 'How to Operate',
      message:
        'Just click on a specific marker to see more information about the event',
      buttons: [
        {
          label: "If you don't believe in yourself...",
          onClick: () => alert("then I'm right here for you"),
        },
      ],
      overlayClassName: 'overlay',
    });
  };
  return (
    <header className='header'>
      <span>
        {' '}
        <Icon icon={infoIcon} onClick={handleClick} className='info-icon ' />
      </span>
      <h1 className='animate'>A Tracker of Unfortunate Events</h1>
    </header>
  );
};

export default Header;
