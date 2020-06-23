const colors = {
  primary: "#2B1E55",
  white: "#fff",
  secondary: "#2EBBAB",
  light: "#99A0AD",
  text: "#474C75",
  gray: "#e7e7e7",
  primary900: "rgba(252,252,252, 0.2)",
};

const theme = {
  text: colors.text,
  primary: colors.primary,
  light: colors.light,
  primary900: colors.primary900,
  sizes: {
    spacing: "16px",
    text: {
      small: "12px",
      normal: "14px",
      medium: "16px",
      large: "18px",
      extraLarge: "20px",
      big: "26px",
      extraBig: "40px",
    },
  },
  form: {
    input: {
      borderColor: colors.gray,
      color: colors.text,
      
    },
    label: {
      borderColor: colors.light,
      color: colors.light,
    },
  },
  header: {
    background: ["#2B1E55", "#191035"],
    color: "#fff",
    title: "bold",
  },
  button: {
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
  },
  card: {
    light: {
      title: colors.primary,
      subTitle: colors.light,
    },
  },
};

export default theme;
