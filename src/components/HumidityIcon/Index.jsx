import style from './style.module.css';

const HumidityIcon = ({ ...rest }) => {
  return (
    <svg
      className={style.humidityIcon}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      {...rest}
    >
      <g>
        <path
          d='M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.043A9.986 9.986 0 0 0 7 19a9 9 0 0 0 18 0a10.063 10.063 0 0 0-1.524-5.007zM16 26a7.009 7.009 0 0 1-7-7a7.978 7.978 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.977 6.977 0 0 1 16 26.001z'
          fill='currentColor'
        ></path>
      </g>
    </svg>
  );
};

export default HumidityIcon;
