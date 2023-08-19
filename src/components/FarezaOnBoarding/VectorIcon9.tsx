import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.52848 0.533447H5.79047C3.03231 0.533447 0.796387 3.01248 0.796387 6.07052V8.51929C0.796387 11.5773 3.03231 14.0564 5.79047 14.0564H8.52848C11.2866 14.0564 13.5226 11.5773 13.5226 8.51929V6.07052C13.5226 3.01248 11.2866 0.533447 8.52848 0.533447Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
