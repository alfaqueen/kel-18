import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.44861 0.704886H6.34979C3.22817 0.704886 0.697594 3.07059 0.697594 5.98883V8.32566C0.697594 11.2439 3.22817 13.6096 6.34979 13.6096H9.44861C12.5702 13.6096 15.1008 11.2439 15.1008 8.32566V5.98883C15.1008 3.07059 12.5702 0.704886 9.44861 0.704886Z'
      fill='#A2D5F2'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
