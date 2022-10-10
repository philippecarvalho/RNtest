import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const SearchIcon = props => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.624 14a8.03 8.03 0 0 0 10.619.66l5.318 5.317a1 1 0 0 0 1.414-1.414l-5.318-5.318A8.04 8.04 0 0 0 2.624 2.625a8.042 8.042 0 0 0 0 11.375Zm1.414-9.96a6.043 6.043 0 1 1-1.77 4.274 6 6 0 0 1 1.77-4.276v.002Z"
      fill="#ED1C24"
    />
  </Svg>
);
