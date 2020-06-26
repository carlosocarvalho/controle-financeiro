import * as React from "react";
import Svg, { Defs, Path, Use, G } from "react-native-svg";

function Calendar(props: any) {
  return (
    <Svg viewBox="0 0 400 400" {...props}>
      <Defs>
        <Path
          d="M371.6 128.32H24.97v-23.11c0-12.76 10.35-23.11 23.11-23.11h11.56v17.33h23.11V82.1h231.08v17.33h23.11V82.1h11.56c12.76 0 23.1 10.35 23.1 23.11v23.11z"
          id="calendar_svg__a"
        />
        <Path
          d="M59.64 295.86c-6.38 0-11.56 5.17-11.56 11.55 0 6.38 5.18 11.56 11.56 11.56 6.38 0 11.55-5.18 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__b"
        />
        <Path
          d="M59.64 249.64c-6.38 0-11.56 5.17-11.56 11.55 0 6.39 5.18 11.56 11.56 11.56 6.38 0 11.55-5.17 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__c"
        />
        <Path
          d="M59.64 203.42c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__d"
        />
        <Path
          d="M59.64 157.2c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__e"
        />
        <Path
          d="M105.85 295.86c-6.38 0-11.55 5.17-11.55 11.55 0 6.38 5.17 11.56 11.55 11.56 6.39 0 11.56-5.18 11.56-11.56 0-6.38-5.17-11.55-11.56-11.55z"
          id="calendar_svg__f"
        />
        <Path
          d="M105.85 249.64c-6.38 0-11.55 5.17-11.55 11.55 0 6.39 5.17 11.56 11.55 11.56 6.39 0 11.56-5.17 11.56-11.56 0-6.38-5.17-11.55-11.56-11.55z"
          id="calendar_svg__g"
        />
        <Path
          d="M105.85 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.39 0 11.56-5.17 11.56-11.55 0-6.38-5.17-11.56-11.56-11.56z"
          id="calendar_svg__h"
        />
        <Path
          d="M105.85 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.39 0 11.56-5.17 11.56-11.55 0-6.38-5.17-11.56-11.56-11.56z"
          id="calendar_svg__i"
        />
        <Path
          d="M152.07 295.86c-6.38 0-11.55 5.17-11.55 11.55 0 6.38 5.17 11.56 11.55 11.56 6.38 0 11.56-5.18 11.56-11.56 0-6.38-5.18-11.55-11.56-11.55z"
          id="calendar_svg__j"
        />
        <Path
          d="M152.07 249.64c-6.38 0-11.55 5.17-11.55 11.55 0 6.39 5.17 11.56 11.55 11.56 6.38 0 11.56-5.17 11.56-11.56 0-6.38-5.18-11.55-11.56-11.55z"
          id="calendar_svg__k"
        />
        <Path
          d="M152.07 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__l"
        />
        <Path
          d="M152.07 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__m"
        />
        <Path
          d="M198.29 295.86c-6.38 0-11.56 5.17-11.56 11.55 0 6.38 5.18 11.56 11.56 11.56 6.38 0 11.55-5.18 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__n"
        />
        <Path
          d="M198.29 249.64c-6.38 0-11.56 5.17-11.56 11.55 0 6.39 5.18 11.56 11.56 11.56 6.38 0 11.55-5.17 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__o"
        />
        <Path
          d="M198.29 203.42c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__p"
        />
        <Path
          d="M198.29 157.2c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__q"
        />
        <Path
          d="M244.51 203.42c-6.39 0-11.56 5.18-11.56 11.56 0 6.38 5.17 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__r"
        />
        <Path
          d="M244.51 157.2c-6.39 0-11.56 5.18-11.56 11.56 0 6.38 5.17 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__s"
        />
        <Path
          d="M290.72 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__t"
        />
        <Path
          d="M290.72 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__u"
        />
        <Path
          d="M336.94 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__v"
        />
        <Path
          d="M336.94 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__w"
        />
        <Path
          d="M198.29 157.2c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__x"
        />
        <Path
          d="M152.07 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__y"
        />
        <Path
          d="M105.85 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.39 0 11.56-5.17 11.56-11.55 0-6.38-5.17-11.56-11.56-11.56z"
          id="calendar_svg__z"
        />
        <Path
          d="M59.64 157.2c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__A"
        />
        <Path
          d="M336.94 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__B"
        />
        <Path
          d="M290.72 157.2c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__C"
        />
        <Path
          d="M244.51 157.2c-6.39 0-11.56 5.18-11.56 11.56 0 6.38 5.17 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__D"
        />
        <Path
          d="M198.29 203.42c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__E"
        />
        <Path
          d="M152.07 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__F"
        />
        <Path
          d="M105.85 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.39 0 11.56-5.17 11.56-11.55 0-6.38-5.17-11.56-11.56-11.56z"
          id="calendar_svg__G"
        />
        <Path
          d="M59.64 203.42c-6.38 0-11.56 5.18-11.56 11.56 0 6.38 5.18 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__H"
        />
        <Path
          d="M336.94 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__I"
        />
        <Path
          d="M290.72 203.42c-6.38 0-11.55 5.18-11.55 11.56 0 6.38 5.17 11.55 11.55 11.55 6.38 0 11.56-5.17 11.56-11.55 0-6.38-5.18-11.56-11.56-11.56z"
          id="calendar_svg__J"
        />
        <Path
          d="M244.51 203.42c-6.39 0-11.56 5.18-11.56 11.56 0 6.38 5.17 11.55 11.56 11.55 6.38 0 11.55-5.17 11.55-11.55 0-6.38-5.17-11.56-11.55-11.56z"
          id="calendar_svg__K"
        />
        <Path
          d="M198.29 249.64c-6.38 0-11.56 5.17-11.56 11.55 0 6.39 5.18 11.56 11.56 11.56 6.38 0 11.55-5.17 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__L"
        />
        <Path
          d="M152.07 249.64c-6.38 0-11.55 5.17-11.55 11.55 0 6.39 5.17 11.56 11.55 11.56 6.38 0 11.56-5.17 11.56-11.56 0-6.38-5.18-11.55-11.56-11.55z"
          id="calendar_svg__M"
        />
        <Path
          d="M105.85 249.64c-6.38 0-11.55 5.17-11.55 11.55 0 6.39 5.17 11.56 11.55 11.56 6.39 0 11.56-5.17 11.56-11.56 0-6.38-5.17-11.55-11.56-11.55z"
          id="calendar_svg__N"
        />
        <Path
          d="M59.64 249.64c-6.38 0-11.56 5.17-11.56 11.55 0 6.39 5.18 11.56 11.56 11.56 6.38 0 11.55-5.17 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__O"
        />
        <Path
          d="M198.29 295.86c-6.38 0-11.56 5.17-11.56 11.55 0 6.38 5.18 11.56 11.56 11.56 6.38 0 11.55-5.18 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__P"
        />
        <Path
          d="M152.07 295.86c-6.38 0-11.55 5.17-11.55 11.55 0 6.38 5.17 11.56 11.55 11.56 6.38 0 11.56-5.18 11.56-11.56 0-6.38-5.18-11.55-11.56-11.55z"
          id="calendar_svg__Q"
        />
        <Path
          d="M105.85 295.86c-6.38 0-11.55 5.17-11.55 11.55 0 6.38 5.17 11.56 11.55 11.56 6.39 0 11.56-5.18 11.56-11.56 0-6.38-5.17-11.55-11.56-11.55z"
          id="calendar_svg__R"
        />
        <Path
          d="M59.64 295.86c-6.38 0-11.56 5.17-11.56 11.55 0 6.38 5.18 11.56 11.56 11.56 6.38 0 11.55-5.18 11.55-11.56 0-6.38-5.17-11.55-11.55-11.55z"
          id="calendar_svg__S"
        />
        <Path
          d="M290.72 365.18c-31.9 0-57.77-25.86-57.77-57.77 0-31.91 25.87-57.77 57.77-57.77 31.82-.09 57.69 25.63 57.78 57.44v.33c0 31.91-25.87 57.77-57.78 57.77z"
          id="calendar_svg__T"
        />
        <Path
          d="M342.72 76.32V64.77c0-3.19-2.59-5.78-5.78-5.78h-23.11c-3.19 0-5.77 2.59-5.77 5.78v11.55H88.52V64.77c0-3.19-2.58-5.78-5.77-5.78H59.64c-3.19 0-5.78 2.59-5.78 5.78v11.55h-5.78c-15.94.02-28.87 12.94-28.88 28.89v219.53c.01 15.95 12.94 28.87 28.88 28.89h199.07c24.45 23.11 62.69 23.11 87.14 0h14.21c15.94-.02 28.86-12.94 28.88-28.89V105.21c-.02-15.95-12.94-28.87-28.88-28.89h-5.78zm-23.11-5.77h11.55v23.11h-11.55V70.55zm-254.2 0h11.56v23.11H65.41V70.55zm-34.66 34.66c.01-9.57 7.76-17.32 17.33-17.33h5.78v11.55c0 3.19 2.59 5.78 5.78 5.78h23.11c3.19 0 5.77-2.59 5.77-5.78V87.88h219.54v11.55c0 3.19 2.58 5.78 5.77 5.78h23.11c3.19 0 5.78-2.59 5.78-5.78V87.88h5.78c9.56.01 17.32 7.76 17.33 17.33v17.33H30.75v-17.33zm259.97 150.21c28.72 0 52 23.28 52 51.99 0 28.72-23.28 52-52 52-28.7-.04-51.96-23.3-51.99-52 0-28.71 23.28-51.99 51.99-51.99zm75.11 69.32c-.01 9.57-7.77 17.32-17.33 17.33h-4.54c19.17-29.4 10.87-68.77-18.53-87.94-29.4-19.16-68.78-10.86-87.94 18.54-13.75 21.09-13.75 48.31 0 69.4H48.08c-9.57-.01-17.32-7.76-17.33-17.33V134.1h335.08v190.64z"
          id="calendar_svg__U"
        />
        <Path
          d="M215.62 168.76c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.796 5.796 0 015.78-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__V"
        />
        <Path
          d="M169.4 168.76c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.796 5.796 0 015.78-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__W"
        />
        <Path
          d="M123.19 168.76c0-9.57-7.76-17.33-17.34-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.77 17.32 17.33 17.33 9.58 0 17.34-7.76 17.34-17.33zm-11.56 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.77-2.59-5.77-5.78a5.78 5.78 0 015.77-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__X"
        />
        <Path
          d="M76.97 168.76c0-9.57-7.76-17.33-17.33-17.33-9.58 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.56 0c0 3.19-2.58 5.78-5.77 5.78-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.77 5.78-5.78 3.19 0 5.77 2.59 5.77 5.78z"
          id="calendar_svg__Y"
        />
        <Path
          d="M354.27 168.76c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.796 5.796 0 015.78-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__Z"
        />
        <Path
          d="M308.06 168.76c0-9.57-7.76-17.33-17.34-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.77 17.32 17.33 17.33 9.58 0 17.34-7.76 17.34-17.33zm-11.56 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.77-2.59-5.77-5.78a5.78 5.78 0 015.77-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__aa"
        />
        <Path
          d="M261.84 168.76c0-9.57-7.76-17.33-17.33-17.33-9.58 0-17.34 7.76-17.34 17.33.02 9.57 7.77 17.32 17.34 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.56 0c0 3.19-2.58 5.78-5.77 5.78-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.77 5.78-5.78 3.19 0 5.77 2.59 5.77 5.78z"
          id="calendar_svg__ab"
        />
        <Path
          d="M215.62 214.98c0-9.58-7.76-17.33-17.33-17.33-9.57 0-17.33 7.75-17.33 17.33.01 9.56 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.77-5.78 5.77-3.19 0-5.78-2.58-5.78-5.77.01-3.19 2.59-5.78 5.78-5.78 3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ac"
        />
        <Path
          d="M169.4 214.98c0-9.58-7.76-17.33-17.33-17.33-9.57 0-17.33 7.75-17.33 17.33.01 9.56 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.77-5.78 5.77-3.19 0-5.78-2.58-5.78-5.77.01-3.19 2.59-5.78 5.78-5.78 3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ad"
        />
        <Path
          d="M123.19 214.98c0-9.58-7.76-17.33-17.34-17.33-9.57 0-17.33 7.75-17.33 17.33.01 9.56 7.77 17.32 17.33 17.33 9.58 0 17.34-7.76 17.34-17.33zm-11.56 0c0 3.19-2.59 5.77-5.78 5.77-3.19 0-5.77-2.58-5.77-5.77 0-3.19 2.58-5.78 5.77-5.78 3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ae"
        />
        <Path
          d="M76.97 214.98c0-9.58-7.76-17.33-17.33-17.33-9.58 0-17.33 7.75-17.33 17.33.01 9.56 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.56 0c0 3.19-2.58 5.77-5.77 5.77-3.19 0-5.78-2.58-5.78-5.77 0-3.19 2.59-5.78 5.78-5.78 3.19 0 5.77 2.59 5.77 5.78z"
          id="calendar_svg__af"
        />
        <Path
          d="M354.27 214.98c0-9.58-7.76-17.33-17.33-17.33-9.57 0-17.33 7.75-17.33 17.33.01 9.56 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.77-5.78 5.77-3.19 0-5.78-2.58-5.78-5.77.01-3.19 2.59-5.78 5.78-5.78 3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ag"
        />
        <Path
          d="M308.06 214.98c0-9.58-7.76-17.33-17.34-17.33-9.57 0-17.33 7.75-17.33 17.33.01 9.56 7.77 17.32 17.33 17.33 9.58 0 17.34-7.76 17.34-17.33zm-11.56 0c0 3.19-2.59 5.77-5.78 5.77-3.19 0-5.77-2.58-5.77-5.77 0-3.19 2.58-5.78 5.77-5.78 3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ah"
        />
        <Path
          d="M261.84 214.98c0-9.58-7.76-17.33-17.33-17.33-9.58 0-17.34 7.75-17.34 17.33.02 9.56 7.77 17.32 17.34 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.56 0c0 3.19-2.58 5.77-5.77 5.77-3.19 0-5.78-2.58-5.78-5.77 0-3.19 2.59-5.78 5.78-5.78 3.19 0 5.77 2.59 5.77 5.78z"
          id="calendar_svg__ai"
        />
        <Path
          d="M215.62 261.19c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.34 9.57 0 17.33-7.76 17.33-17.34zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.78 5.78 0 015.78-5.77c3.19 0 5.78 2.58 5.78 5.77z"
          id="calendar_svg__aj"
        />
        <Path
          d="M169.4 261.19c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.34 9.57 0 17.33-7.76 17.33-17.34zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.78 5.78 0 015.78-5.77c3.19 0 5.78 2.58 5.78 5.77z"
          id="calendar_svg__ak"
        />
        <Path
          d="M123.19 261.19c0-9.57-7.76-17.33-17.34-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.77 17.32 17.33 17.34 9.58 0 17.34-7.76 17.34-17.34zm-11.56 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.77-2.59-5.77-5.78 0-3.19 2.58-5.77 5.77-5.77 3.19 0 5.78 2.58 5.78 5.77z"
          id="calendar_svg__al"
        />
        <Path
          d="M76.97 261.19c0-9.57-7.76-17.33-17.33-17.33-9.58 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.34 9.57 0 17.33-7.76 17.33-17.34zm-11.56 0c0 3.19-2.58 5.78-5.77 5.78-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.77 5.78-5.77 3.19 0 5.77 2.58 5.77 5.77z"
          id="calendar_svg__am"
        />
        <Path
          d="M215.62 307.41c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.796 5.796 0 015.78-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__an"
        />
        <Path
          d="M169.4 307.41c0-9.57-7.76-17.33-17.33-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.55 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.78-2.59-5.78-5.78a5.796 5.796 0 015.78-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ao"
        />
        <Path
          d="M123.19 307.41c0-9.57-7.76-17.33-17.34-17.33-9.57 0-17.33 7.76-17.33 17.33.01 9.57 7.77 17.32 17.33 17.33 9.58 0 17.34-7.76 17.34-17.33zm-11.56 0c0 3.19-2.59 5.78-5.78 5.78-3.19 0-5.77-2.59-5.77-5.78a5.78 5.78 0 015.77-5.78c3.19 0 5.78 2.59 5.78 5.78z"
          id="calendar_svg__ap"
        />
        <Path
          d="M76.97 307.41c0-9.57-7.76-17.33-17.33-17.33-9.58 0-17.33 7.76-17.33 17.33.01 9.57 7.76 17.32 17.33 17.33 9.57 0 17.33-7.76 17.33-17.33zm-11.56 0c0 3.19-2.58 5.78-5.77 5.78-3.19 0-5.78-2.59-5.78-5.78 0-3.19 2.59-5.77 5.78-5.78 3.19 0 5.77 2.59 5.77 5.78z"
          id="calendar_svg__aq"
        />
        <Path
          d="M321.58 285.73c-2.81 2.46-16.86 14.75-42.15 36.88l-13.51-13.51c-2.25-2.25-5.91-2.25-8.17 0-2.25 2.26-2.25 5.92 0 8.17 1.74 1.74 15.6 15.6 17.33 17.34a5.781 5.781 0 007.89.26c4.63-4.05 41.6-36.4 46.22-40.44 2.4-2.1 2.65-5.75.55-8.15h-.01a5.768 5.768 0 00-8.15-.55z"
          id="calendar_svg__ar"
        />
      </Defs>
      <Use xlinkHref="#calendar_svg__a" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__a"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__b" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__b"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__c" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__c"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__d" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__d"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__e" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__e"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__f" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__f"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__g" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__g"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__h" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__h"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__i" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__i"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__j" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__j"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__k" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__k"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__l" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__l"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__m" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__m"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__n" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__n"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__o" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__o"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__p" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__p"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__q" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__q"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__r" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__r"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__s" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__s"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__t" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__t"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__u" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__u"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__v" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__v"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__w" fill="#57a4ff" />
      <Use
        xlinkHref="#calendar_svg__w"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__x" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__x"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__y" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__y"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__z" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__z"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__A" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__A"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__B" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__B"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__C" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__C"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__D" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__D"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__E" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__E"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__F" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__F"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__G" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__G"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__H" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__H"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <Use xlinkHref="#calendar_svg__I" fill="#8162e4" />
      <Use
        xlinkHref="#calendar_svg__I"
        fillOpacity={0}
        stroke="#000"
        strokeOpacity={0}
      />
      <G>
        <Use xlinkHref="#calendar_svg__J" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__J"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__K" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__K"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__L" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__L"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__M" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__M"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__N" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__N"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__O" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__O"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__P" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__P"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__Q" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__Q"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__R" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__R"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__S" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__S"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__T" fill="#8162e4" />
        <Use
          xlinkHref="#calendar_svg__T"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__U" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__U"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__V" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__V"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__W" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__W"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__X" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__X"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__Y" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__Y"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__Z" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__Z"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__aa" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__aa"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ab" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ab"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ac" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ac"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ad" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ad"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ae" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ae"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__af" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__af"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ag" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ag"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ah" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ah"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ai" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ai"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__aj" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__aj"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ak" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ak"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__al" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__al"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__am" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__am"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__an" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__an"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ao" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ao"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ap" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ap"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__aq" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__aq"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
      <G>
        <Use xlinkHref="#calendar_svg__ar" fill="#2b1e55" />
        <Use
          xlinkHref="#calendar_svg__ar"
          fillOpacity={0}
          stroke="#000"
          strokeOpacity={0}
        />
      </G>
    </Svg>
  );
}

export default Calendar;

