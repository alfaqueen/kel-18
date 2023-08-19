import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 103 113' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.332309 91.9974H0.557906C22.5464 91.9719 43.6267 83.129 59.1749 67.4088C74.7231 51.6886 83.4694 30.3748 83.4946 8.14307C83.4946 5.51271 83.3756 2.91259 83.1376 0.342712H101.718C101.917 2.99752 102.018 5.66971 102.018 8.35927C102.045 22.2505 99.2989 36.0045 93.9439 48.7972C88.7867 61.1427 81.3072 72.3582 71.9211 81.8208C62.5619 91.3097 51.4701 98.8716 39.2608 104.087C26.9383 109.36 13.7106 112.131 0.330444 112.244L0.332309 91.9974Z'
      fill='#FCA931'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
