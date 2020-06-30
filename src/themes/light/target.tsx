import colors from "./colors";
import sizes from "./sizes";

export default {
  android: {
    item: {
      title: {
        size: `${sizes.android.large}px`,
        color: colors.text,
      },
      value: {
        size: `${sizes.android.normal}px`,
        color: colors.secondary,
      },
      label: {
        size: `${sizes.android.normal}px`,
        color: colors.text,
      },
      percentual: {
        background: colors.secondary,
      },
    },
    deposit: {
      header: {
        title: {
          size: `${sizes.android.large}px`,
          color: colors.text,
        },
      },
      title: {
        size: `${sizes.android.normal}px`,
        color: colors.text,
      },
      value: {
        size: `${sizes.android.normal}px`,
        color: colors.text,
      },
      label: {
        size: `${sizes.android.normal}px`,
        color: colors.secondary,
      },
    },
  },
  ios: {
    item: {
      title: {
        size: `${sizes.ios.extraLarge}px`,
        color: colors.text,
      },
      value: {
        size: `${sizes.ios.normal}px`,
        color: colors.secondary,
      },
      label: {
        size: `${sizes.ios.normal}px`,
        color: colors.text,
      },
      percentual: {
        background: colors.secondary,
      },
    },
    deposit: {
      header: {
        title: {
          size: `${sizes.ios.big}px`,
          color: colors.text,
        },
      },
      title: {
        size: `${sizes.ios.normal}px`,
        color: colors.text,
      },
      value: {
        size: `${sizes.ios.normal}px`,
        color: colors.text,
      },
      label: {
        size: `${sizes.ios.normal}px`,
        color: colors.light,
      },
    },
  },
};
