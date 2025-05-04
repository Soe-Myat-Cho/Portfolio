module.exports = {
  theme: {
    extend: {
      animation: {
        blob: "profile_animate 8s ease-in-out infinite 1s",
      },
      keyframes: {
        profile_animate: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
    },
  },
};
