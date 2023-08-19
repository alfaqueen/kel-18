import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.45139 0.465637H5.59263C2.71283 0.465637 0.378296 2.826 0.378296 5.73766V8.06921C0.378296 10.9809 2.71283 13.3412 5.59263 13.3412H8.45139C11.3312 13.3412 13.6657 10.9809 13.6657 8.06921V5.73766C13.6657 2.826 11.3312 0.465637 8.45139 0.465637Z'
      fill='#6A69DD'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
