import React from "react";
import { style } from ".";

interface ILockIcon {}

export const LockIcon = ({}: ILockIcon) => {
  return (
    <>
      <svg
        width={style.HeightWidth}
        height={style.HeightWidth}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.6531 17.0307L3.9585 17.3136H3.9585L4.6531 17.0307ZM4.30609 11.4076L5.03001 11.6037L4.30609 11.4076ZM19.6939 11.4076L18.97 11.6037L19.6939 11.4076ZM19.3469 17.0307L20.0415 17.3136V17.3136L19.3469 17.0307ZM14.0365 20.842L13.9207 20.1009H13.9207L14.0365 20.842ZM9.96352 20.842L9.84775 21.583L9.96352 20.842ZM8.65619 7.61682L8.50688 6.88184V6.88184L8.65619 7.61682ZM15.3438 7.61682L15.1945 8.35181L15.3438 7.61682ZM9.21479 20.725L9.33056 19.984L9.21479 20.725ZM4.74598 17.2587L5.44059 16.9758H5.44058L4.74598 17.2587ZM14.7852 20.725L14.901 21.466L14.7852 20.725ZM19.254 17.2587L18.5594 16.9758L19.254 17.2587ZM15.6199 7.67291L15.7692 6.93793L15.7692 6.93793L15.6199 7.67291ZM8.38009 7.67291L8.5294 8.4079L8.38009 7.67291ZM6.89401 7.44547C6.89401 7.85968 7.2298 8.19547 7.64401 8.19547C8.05822 8.19547 8.39401 7.85968 8.39401 7.44547H6.89401ZM7.64401 7.20939H6.89401H7.64401ZM10.9188 3.14409L10.737 2.41646L10.737 2.41646L10.9188 3.14409ZM10.9871 3.12701L11.1689 3.85464L11.1689 3.85464L10.9871 3.12701ZM14.9208 4.15264L14.4015 4.69381V4.69381L14.9208 4.15264ZM14.657 4.93894C14.9559 5.22572 15.4306 5.21592 15.7174 4.91704C16.0042 4.61816 15.9944 4.14339 15.6955 3.8566L14.657 4.93894ZM13.0154 3.1175L13.1904 2.38819L13.0154 3.1175ZM8.5294 8.4079L8.80551 8.35181L8.50688 6.88184L8.23077 6.93793L8.5294 8.4079ZM15.1945 8.35181L15.4706 8.4079L15.7692 6.93793L15.4931 6.88184L15.1945 8.35181ZM14.6694 19.984L13.9207 20.1009L14.1522 21.583L14.901 21.466L14.6694 19.984ZM10.0793 20.1009L9.33056 19.984L9.09902 21.466L9.84775 21.583L10.0793 20.1009ZM18.6523 16.7478L18.5594 16.9758L19.9486 17.5416L20.0415 17.3136L18.6523 16.7478ZM5.44058 16.9758L5.3477 16.7478L3.9585 17.3136L4.05138 17.5416L5.44058 16.9758ZM5.3477 16.7478C4.67942 15.1069 4.56861 13.3073 5.03001 11.6037L3.58217 11.2116C3.03461 13.2333 3.16669 15.3694 3.9585 17.3136L5.3477 16.7478ZM18.97 11.6037C19.4314 13.3073 19.3206 15.1069 18.6523 16.7478L20.0415 17.3136C20.8333 15.3694 20.9654 13.2333 20.4178 11.2116L18.97 11.6037ZM13.9207 20.1009C12.6486 20.2997 11.3513 20.2997 10.0793 20.1009L9.84775 21.583C11.2732 21.8057 12.7267 21.8057 14.1522 21.583L13.9207 20.1009ZM8.80551 8.35181C10.9117 7.92392 13.0883 7.92392 15.1945 8.35181L15.4931 6.88184C13.1898 6.41392 10.8102 6.41392 8.50688 6.88184L8.80551 8.35181ZM9.33056 19.984C7.55581 19.7067 6.08337 18.5541 5.44059 16.9758L4.05138 17.5416C4.90105 19.6278 6.8268 21.111 9.09902 21.466L9.33056 19.984ZM14.901 21.466C17.1732 21.111 19.0989 19.6278 19.9486 17.5416L18.5594 16.9758C17.9166 18.5541 16.4442 19.7067 14.6694 19.984L14.901 21.466ZM15.4706 8.4079C17.1917 8.75754 18.5371 10.0052 18.97 11.6037L20.4178 11.2116C19.8296 9.03976 18.02 7.39517 15.7692 6.93793L15.4706 8.4079ZM8.23077 6.93793C5.98003 7.39517 4.1704 9.03976 3.58217 11.2116L5.03001 11.6037C5.46295 10.0052 6.80831 8.75754 8.5294 8.4079L8.23077 6.93793ZM8.39401 7.44547V7.20939H6.89401V7.44547H8.39401ZM11.1006 3.87172L11.1689 3.85464L10.8053 2.39938L10.737 2.41646L11.1006 3.87172ZM14.4015 4.69381L14.657 4.93894L15.6955 3.8566L15.44 3.61147L14.4015 4.69381ZM12.8405 3.84681C13.4346 3.98934 13.9737 4.28335 14.4015 4.69381L15.44 3.61147C14.8166 3.01323 14.0385 2.59164 13.1904 2.38819L12.8405 3.84681ZM11.1689 3.85464C11.7165 3.71783 12.2915 3.71512 12.8405 3.84681L13.1904 2.38819C12.4068 2.20023 11.587 2.20406 10.8053 2.39938L11.1689 3.85464ZM8.39401 7.20939C8.39401 5.66024 9.487 4.27491 11.1006 3.87172L10.737 2.41646C8.49317 2.97712 6.89401 4.93383 6.89401 7.20939H8.39401Z"
          fill={style.color}
        />
        <path
          d="M12 13.5L12 15.5"
          stroke={style.color}
          stroke-width={style.strokeWidth}
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};
