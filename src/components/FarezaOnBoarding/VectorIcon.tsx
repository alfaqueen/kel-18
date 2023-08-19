import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.75091 0.704886H5.6521C2.53047 0.704886 -0.000105948 3.07059 -0.000105948 5.98883V8.32566C-0.000105948 11.2439 2.53047 13.6096 5.6521 13.6096H8.75091C11.8725 13.6096 14.4031 11.2439 14.4031 8.32566V5.98883C14.4031 3.07059 11.8725 0.704886 8.75091 0.704886Z'
      fill='#07689F'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
