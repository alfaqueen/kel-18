import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.73807 0.533447H5.00007C2.24191 0.533447 0.00598145 3.01248 0.00598145 6.07052V8.51929C0.00598145 11.5773 2.24191 14.0564 5.00007 14.0564H7.73807C10.4962 14.0564 12.7322 11.5773 12.7322 8.51929V6.07052C12.7322 3.01248 10.4962 0.533447 7.73807 0.533447Z'
      fill='#F79742'
    />
  </svg>
);

const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };
