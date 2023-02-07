import * as React from 'react';
import Svg, {G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CircleSvg = props => (
  <Svg>
    <Circle cx={200} cy={200} r={60}></Circle>
  </Svg>
);

export default CircleSvg;
