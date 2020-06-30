import colors from "./colors";
import header from "./header";
import button from "./buttons";
import card from "./card";
import bankAccount from "./bankAccount";
import sizes from "./sizes";
import form from "./form";
import keyboard from "./keyboard";
import cast from "./cast";
import target from "./target";

export default {
  android: {
    ...{ target: target.android },
    rawSizes: sizes.android,
    ...colors,
    ...{ header: header.android },
    button,
    card,
    ...{ form: form.android },
    ...{ bankAccount: bankAccount.android },
    ...{
      sizes: {
        spacing: `${sizes.android.spacing}px`,
        text: {
          small: `${sizes.android.small}px`,
          normal: `${sizes.android.normal}px`,
          medium: `${sizes.android.medium}px`,
          large: `${sizes.android.large}px`,
          extraLarge: `${sizes.android.extraLarge}px`,
          big: `${sizes.android.big}px`,
          extraBig: `${sizes.android.extraBig}px`,
          spacing: `${sizes.android.spacing}px`,
        },
      },
    },
    ...{ keyboard: keyboard.android },
    ...{ cast: cast.android },
  },

  ios: {
    ...{ target: target.ios },
    rawSizes: sizes.ios,
    ...colors,
    ...{ header: header.ios },
    button,
    card,
    ...{ form: form.ios },
    ...{ bankAccount: bankAccount.ios },
    ...{
      sizes: {
        spacing: `${sizes.ios.spacing}px`,
        text: {
          small: `${sizes.ios.small}px`,
          normal: `${sizes.ios.normal}px`,
          medium: `${sizes.ios.medium}px`,
          large: `${sizes.ios.large}px`,
          extraLarge: `${sizes.ios.extraLarge}px`,
          big: `${sizes.ios.big}px`,
          extraBig: `${sizes.ios.extraBig}px`,
          spacing: `${sizes.ios.spacing}px`,
        },
      },
    },
    ...{ keyboard: keyboard.ios },

    ...{ cast: cast.ios },
  },
};
