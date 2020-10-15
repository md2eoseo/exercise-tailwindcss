module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    extend: {
      fontFamily: {
        apple: [
          "SF Pro KR",
          "SF Pro Text",
          "Yoon Gothic",
          "Myriad Set Pro",
          "SF Pro Icons",
          "Apple Gothic",
          "HY Gulim",
          "MalgunGothic",
          "HY Dotum",
          "Lexi Gulim",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      width: {
        280: "280px",
        340: "340px",
        980: "980px",
      },
      minWidth: {
        320: "320px",
      },
      height: {
        320: "320px",
        400: "400px",
        480: "480px",
        500: "500px",
        580: "580px",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      backgroundColor: {
        curtain: "rgba(0,0,0,0.48)",
      },
    },
  },
  variants: {
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-filters")],
};
