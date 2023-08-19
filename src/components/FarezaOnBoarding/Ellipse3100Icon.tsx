import { memo, SVGProps } from 'react';

const Ellipse3100Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.5} cy={3.5} r={3.5} fill='#7BCCFF' stroke='white' strokeWidth={2} />
  </svg>
);

const Memo = memo(Ellipse3100Icon);
export { Memo as Ellipse3100Icon };
