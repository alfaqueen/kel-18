import { memo, SVGProps } from 'react';

const IconlyBoldArrowLeftCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30 0L30.8393 0.0115326C47.0117 0.45649 60 13.7207 60 30C60 46.53 46.56 60 30 60C13.47 60 0 46.53 0 30C0 13.44 13.47 0 30 0ZM35.94 18C35.04 17.1 33.63 17.1 32.76 18L22.29 28.41C21.87 28.83 21.63 29.4 21.63 30C21.63 30.6 21.87 31.17 22.29 31.59L32.76 42C33.18 42.45 33.75 42.66 34.32 42.66C34.92 42.66 35.49 42.45 35.94 42C36.81 41.1 36.81 39.69 35.91 38.82L27.06 30L35.91 21.18C36.81 20.31 36.81 18.87 35.94 18Z'
      fill='#18437A'
    />
  </svg>
);

const Memo = memo(IconlyBoldArrowLeftCircleIcon);
export { Memo as IconlyBoldArrowLeftCircleIcon };
