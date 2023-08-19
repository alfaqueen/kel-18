import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.4221 0.465637H5.56334C2.68354 0.465637 0.348999 2.826 0.348999 5.73766V8.06921C0.348999 10.9809 2.68354 13.3412 5.56334 13.3412H8.4221C11.3019 13.3412 13.6364 10.9809 13.6364 8.06921V5.73766C13.6364 2.826 11.3019 0.465637 8.4221 0.465637Z'
      fill='#00AAE8'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
