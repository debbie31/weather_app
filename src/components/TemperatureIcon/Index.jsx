import style from './style.module.css';

const TemperatureIcon = ({ ...rest }) => {
  return (
    <svg
      className={style.tempIcon}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      {...rest}
    >
      <g fill='none'>
        <path
          d='M10 6.5a.5.5 0 0 1 .5.5v5.063a2 2 0 1 1-1 0V7a.5.5 0 0 1 .5-.5zM10 2a3 3 0 0 0-3 3v6.354a4 4 0 1 0 6 0V5a3 3 0 0 0-3-3zm0 1a2 2 0 0 1 2 2v6.755l.143.145a3 3 0 1 1-4.286 0L8 11.755V5a2 2 0 0 1 2-2z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export default TemperatureIcon;
