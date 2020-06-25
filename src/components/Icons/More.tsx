import * as React from "react";
import Svg, { Defs, Path, Use, G } from "react-native-svg";

function More(props: any) {
  return (
    <Svg viewBox="0 0 400 400" width={400} height={400} {...props}>
      <Defs>
        <Path
          d="M67.19 175.48c-22.32 0-40.42 18.09-40.42 40.42 0 22.32 18.1 40.42 40.42 40.42s40.42-18.1 40.42-40.42c0-22.33-18.1-40.42-40.42-40.42z"
          id="more_svg__a"
        />
        <Path
          d="M332.81 175.48c-22.32 0-40.42 18.09-40.42 40.42 0 22.32 18.1 40.42 40.42 40.42s40.42-18.1 40.42-40.42c0-22.33-18.1-40.42-40.42-40.42z"
          id="more_svg__b"
        />
        <Path
          d="M153.81 214.45c0 25.52 20.68 46.2 46.19 46.2 25.51 0 46.19-20.68 46.19-46.2-.02-25.5-20.69-46.16-46.19-46.19-25.51 0-46.19 20.68-46.19 46.19zm11.54 0c0-19.13 15.52-34.64 34.65-34.64s34.65 15.51 34.65 34.64c-.03 19.13-15.52 34.63-34.65 34.65-19.13 0-34.65-15.51-34.65-34.65z"
          id="more_svg__c"
        />
        <Path
          d="M21 214.45c0 25.52 20.68 46.2 46.19 46.2 25.51 0 46.2-20.68 46.2-46.2-.03-25.5-20.7-46.16-46.2-46.19-25.51 0-46.19 20.68-46.19 46.19zm11.55 0c0-19.13 15.51-34.64 34.64-34.64 19.14 0 34.65 15.51 34.65 34.64-.02 19.13-15.52 34.63-34.65 34.65-19.13 0-34.64-15.51-34.64-34.65z"
          id="more_svg__d"
        />
        <Path
          d="M286.61 214.45c0 25.52 20.69 46.2 46.2 46.2S379 239.97 379 214.45c-.03-25.5-20.69-46.16-46.19-46.19-25.51 0-46.2 20.68-46.2 46.19zm11.55 0c0-19.13 15.51-34.64 34.65-34.64 19.13 0 34.64 15.51 34.64 34.64-.02 19.13-15.52 34.63-34.64 34.65-19.14 0-34.65-15.51-34.65-34.65z"
          id="more_svg__e"
        />
      </Defs>
      <Use xlinkHref="#more_svg__a" fill="#8162e4" />
      <Use
        xlinkHref="#more_svg__a"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#more_svg__b" fill="#8162e4" />
      <Use
        xlinkHref="#more_svg__b"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#more_svg__c" fill="#2b1e55" />
      <Use
        xlinkHref="#more_svg__c"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <G>
        <Use xlinkHref="#more_svg__d" fill="#2b1e55" />
        <Use
          xlinkHref="#more_svg__d"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#more_svg__e" fill="#2b1e55" />
        <Use
          xlinkHref="#more_svg__e"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
    </Svg>
  );
}

export default More;

