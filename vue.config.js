module.exports = {
  devServer: {
    allowedHosts: ['.merchdistrict.localhost'],
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
};
