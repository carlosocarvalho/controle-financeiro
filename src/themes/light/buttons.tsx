import colors from "./colors";

const sizes = {
  android: {
    height: "40px",
    width: "120px",
    size: "14px",
  },
  ios: {
    height: "50px",
    width: "150px",
    size: "16px",
  },
};

const buttons = {
  primary: {
    color: "#fff",
    background: colors.primary,
    border: "1px solid " + colors.primary,
   
  },
  secondary: {
    color: colors.white,
    background: colors.secondary,
    border: "1px solid " + colors.secondary,
   
  },
  primaryOutline: {
    color: colors.primary,
    background: colors.white,
    border: "1px solid " + colors.primary,
   
  },
  danger: {
    color: colors.white,
    background: colors.danger,
    border: "1px solid " + colors.danger,
  },
}
export default {
  android: {
    primary: {
      ...buttons.primary,
      ...sizes.android,
    },
    secondary: {
      ...buttons.secondary,
      ...sizes.android,
    },
    primaryOutline: {
      ...buttons.primaryOutline,
      ...sizes.android,
    },
    danger: {
      ...buttons.danger,
      ...sizes.android,
    },
  },
  ios: {
    primary: {
      ...buttons.primary,
      ...sizes.ios,
    },
    secondary: {
      color: colors.white,
      background: colors.secondary,
      border: "1px solid " + colors.secondary,
      ...sizes.ios,
    },
    primaryOutline: {
      ...buttons.primaryOutline,
      ...sizes.ios,
    },

    danger: {
      ...buttons.danger,
      ...sizes.ios,
    },
  },
};
