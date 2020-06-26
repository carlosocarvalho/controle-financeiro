import colors from "./colors";
import sizes from "./sizes";

export default {
  ios: {
    modal: {
      title: {
        size: `${sizes.ios.large}px`,
        color: colors.text,
      },
      item: {
        padding: `${sizes.ios.spacing}px`,
        borderColor: colors.gray,
        title: {
          size: `${sizes.ios.medium}px`,
          color: colors.primary,
        },
        label: {
          size: `${sizes.ios.normal}px`,
          color: colors.light,
        },
        icon: {
          background: colors.gray,
        },
      },
    },
  },
  android: {
    modal: {
      title: {
        size: `${sizes.android.large}px`,
        color: colors.text,
      },
      item: {
        padding: `${sizes.android.spacing}px`,
        borderColor: colors.gray,
        title: {
          size: `${sizes.android.medium}px`,
          color: colors.primary,
        },
        label: {
          size: `${sizes.android.normal}px`,
          color: colors.light,
        },
        icon: {
          background: colors.gray,
        },
      },
    },
  },
};
