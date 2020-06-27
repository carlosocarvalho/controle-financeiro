import sizes from "./sizes";

export default {
  android: {
    item: {
      title: {
        size: `${sizes.android.medium}px`,
      },
    },

    footer: {
      actions: {
        height: "160px",
      },
    },
  },
  ios: {
    item: {
      title: {
        size: `${sizes.ios.medium}px`,
      },
    },
    footer: {
      actions: {
        height: "95px",
      },
    },
  },
};
