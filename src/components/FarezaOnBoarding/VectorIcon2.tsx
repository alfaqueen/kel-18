import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.10643 0.383912H6.00761C2.88598 0.383912 0.355408 2.74961 0.355408 5.66786V8.00468C0.355408 10.9229 2.88598 13.2886 6.00761 13.2886H9.10643C12.2281 13.2886 14.7586 10.9229 14.7586 8.00468V5.66786C14.7586 2.74961 12.2281 0.383912 9.10643 0.383912Z'
      fill='#FF7E67'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
