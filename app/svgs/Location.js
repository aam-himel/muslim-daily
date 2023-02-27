import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LocationSvg = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.175 21.775a.865.865 0 0 1-.788-.187c-.225-.191-.338-.454-.337-.788 0-.233.08-.446.238-.638.159-.192.354-.321.587-.387.417-.1.821-.229 1.213-.387a6.889 6.889 0 0 0 1.137-.588c.217-.133.454-.188.713-.163a1 1 0 0 1 .637.288c.233.233.338.5.313.8a.874.874 0 0 1-.438.7 9.291 9.291 0 0 1-1.588.825 11.36 11.36 0 0 1-1.687.525ZM19 17.5a.997.997 0 0 1-.288-.625.996.996 0 0 1 .163-.675c.217-.367.408-.742.575-1.125.167-.383.3-.792.4-1.225a1.2 1.2 0 0 1 .4-.6c.2-.167.417-.25.65-.25.333 0 .596.117.787.35.191.233.246.5.163.8-.133.6-.313 1.171-.538 1.713a8.345 8.345 0 0 1-.837 1.537.883.883 0 0 1-.688.413c-.292.025-.554-.079-.787-.313Zm1.875-6.5a.95.95 0 0 1-.638-.25 1.223 1.223 0 0 1-.387-.6 7.42 7.42 0 0 0-.4-1.238 8.173 8.173 0 0 0-.575-1.112 1.003 1.003 0 0 1-.163-.675A.99.99 0 0 1 19 6.5c.233-.233.496-.342.788-.325.292.017.521.15.687.4.333.483.617 1.004.85 1.563.233.559.417 1.13.55 1.712.067.3 0 .567-.2.8-.2.233-.467.35-.8.35ZM9.95 21.75c-2.283-.533-4.162-1.7-5.637-3.5C2.838 16.45 2.101 14.367 2.1 12c0-2.383.733-4.483 2.2-6.3 1.467-1.817 3.342-2.975 5.625-3.475a.864.864 0 0 1 .788.188.949.949 0 0 1 .337.762c0 .233-.08.446-.238.638a1.156 1.156 0 0 1-.587.387c-1.783.433-3.25 1.375-4.4 2.825C4.675 8.475 4.1 10.133 4.1 12c0 1.867.575 3.513 1.725 4.938 1.15 1.425 2.617 2.371 4.4 2.837.233.067.43.2.588.4.159.2.238.417.237.65 0 .317-.108.567-.325.75-.217.183-.475.242-.775.175ZM16.3 5.225a9.91 9.91 0 0 0-1.175-.613A7.212 7.212 0 0 0 13.9 4.2a1.23 1.23 0 0 1-.6-.388.95.95 0 0 1-.25-.637.95.95 0 0 1 .338-.762.866.866 0 0 1 .787-.188c.583.133 1.15.308 1.7.525.55.217 1.083.492 1.6.825.267.167.413.4.438.7.025.3-.079.567-.313.8a1.044 1.044 0 0 1-.613.3 1.01 1.01 0 0 1-.687-.15ZM12.075 16.65a1.045 1.045 0 0 1-.7-.25c-1.1-1.017-1.925-1.967-2.475-2.85s-.825-1.7-.825-2.45c0-1.25.404-2.246 1.213-2.987.809-.741 1.738-1.112 2.787-1.113 1.05 0 1.98.371 2.788 1.113.809.742 1.213 1.738 1.212 2.987 0 .75-.275 1.567-.825 2.45-.55.883-1.375 1.833-2.475 2.85-.1.083-.208.146-.325.188a1.082 1.082 0 0 1-.375.062Zm0-4.65c.3 0 .554-.104.763-.312.209-.208.313-.462.312-.763a1.05 1.05 0 0 0-.313-.75 1.018 1.018 0 0 0-.762-.325c-.3 0-.554.108-.762.325a1.055 1.055 0 0 0-.313.75c0 .3.104.554.313.763.209.209.463.313.762.312Z"
      fill="#fff"
    />
  </Svg>
);

export default LocationSvg;
