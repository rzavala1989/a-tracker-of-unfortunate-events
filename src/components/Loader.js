import spinner from './fire.gif';

export const Loader = () => {
  return (
    <div>
      <div className='loader'>
        <img src={spinner} alt='fire spinner' />
        <h2>Searching for disasters...</h2>
      </div>
    </div>
  );
};
