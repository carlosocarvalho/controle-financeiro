import * as React from "react";
import Svg, { Defs, Path, Use, G } from "react-native-svg";

function Logo(props: any) {
  return (
    <Svg  viewBox="0 0 215 200" width={200} height={200} {...props}>
      <Defs>
        <Path
          d="M88.91 37.74l-3.37 21.6-16.08 21.6-23.07 7.24-22.4-7.24 31.25-43.2h33.67z"
          id="logo_svg__a"
        />
        <Path
          d="M69.46 80.94l23.46 41.74 12.45 65.9L23.99 80.94h45.47z"
          id="logo_svg__b"
        />
        <Path
          d="M105.37 37.74l7.14 20.37-7.14 22.83H69.46l19.45-43.2h16.46z"
          id="logo_svg__c"
        />
        <Path
          d="M115.21 124.28l-9.84 64.3L69.46 80.94h35.91l9.84 43.34z"
          id="logo_svg__d"
        />
        <Path
          d="M105.37 80.94v107.64l31.23-65.07 4.67-42.57h-35.9z"
          id="logo_svg__e"
        />
        <Path
          d="M122.9 37.74h-17.53v43.2h35.9l-.73-24.14-17.64-19.06z"
          id="logo_svg__f"
        />
        <Path
          d="M186.75 80.94l-31.45-43.2h-32.4l18.37 43.2 22.44 6.35 23.04-6.35z"
          id="logo_svg__g"
        />
        <Path
          d="M141.27 80.94l-35.9 107.64 81.38-107.64h-45.48z"
          id="logo_svg__h"
        />
      </Defs>
      <Use xlinkHref="#logo_svg__a" fill="#8162e4" />
      <Use
        xlinkHref="#logo_svg__a"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#logo_svg__b" fill="#c4b1ff" />
      <Use
        xlinkHref="#logo_svg__b"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#logo_svg__c" fill="#c4b1ff" />
      <Use
        xlinkHref="#logo_svg__c"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#logo_svg__d" fill="#8162e4" />
      <Use
        xlinkHref="#logo_svg__d"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <G>
        <Use xlinkHref="#logo_svg__e" fill="#2b1e55" />
        <Use
          xlinkHref="#logo_svg__e"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#logo_svg__f" fill="#8162e4" />
        <Use
          xlinkHref="#logo_svg__f"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#logo_svg__g" fill="#2b1e55" />
        <Use
          xlinkHref="#logo_svg__g"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#logo_svg__h" fill="#8162e4" />
        <Use
          xlinkHref="#logo_svg__h"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
    </Svg>
  );
}

export default Logo;

