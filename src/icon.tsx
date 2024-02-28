import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill="none"
    {...props}>
    <Path
      fill="#4838D1"
      fillRule="evenodd"
      d="M50.4 74.4c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24Zm0 12c19.882 0 36-16.118 36-36s-16.118-36-36-36-36 16.118-36 36 16.118 36 36 36Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F77A55"
      d="M103.2 91.2c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
