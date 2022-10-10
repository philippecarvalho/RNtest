import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Spinner = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.04 21.642a9.418 9.418 0 0 1-6.29-.983 9.369 9.369 0 0 1-4.21-4.76 9.475 9.475 0 0 1-.22-6.375 9.566 9.566 0 0 1 3.87-5.098 9.494 9.494 0 0 1 6.204-1.506 9.377 9.377 0 0 1 8.363 8.56"
      stroke="#ED1C24"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
);
