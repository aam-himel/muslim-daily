import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AlermSvg = props => (
  <Svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.88 2.39 4.6.86 0 4.71l1.29 1.53 4.59-3.85ZM20 4.72 15.4.86l-1.29 1.53 4.6 3.86L20 4.72ZM10 3a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18Zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Zm1-11H9v3H6v2h3v3h2v-3h3v-2h-3V8Z"
      fill="#25282B"
    />
  </Svg>
);

export default AlermSvg;
