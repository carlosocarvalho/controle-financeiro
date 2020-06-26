import colors from "./colors";
import sizes from "./sizes";

export default {
  android: {
    background: ["#2B1E55", "#191035"],
    color: colors.white,
    title: "bold",
    titleSize: `${sizes.android.large}px`,
    cast: {
      height: "130px",
    },

    home: {
      height: "155px",
    },
    recurrent: {
      list: {
        height: "50px",
      },
    },
    categorie: {
      list: {
        height: "55px",
      },
    },
    screen: {
      resume: {
        height: "60px",
      }
    }
  },
  ios: {
    background: ["#2B1E55", "#191035"],
    color: colors.white,
    title: "bold",
    titleSize: `${sizes.ios.large}px`,
    cast: {
      height: "160px",
    },
    home: {
      height: "200px",
    },
    categorie: {
      list: {
        height: "100px",
      },
    },
    recurrent: {
      list: {
        height: "100px",
      },
    },
    screen: {
      resume: {
        height: "90px",
      }
    }
  },
};
