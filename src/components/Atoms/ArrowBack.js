import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowBack = ({fillColor = '#FFFFFF', ...props}) => (
  <Svg
    width={7}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m.293 5.293 4-4a1 1 0 1 1 1.414 1.414L2.414 6l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414Z"
      fill={fillColor}
    />
  </Svg>
);
