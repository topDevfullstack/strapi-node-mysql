module.exports = {
  async ftpScan(ctx, next) {
    try {
      const data = await strapi
        .service("api::ftp-scan.ftp-scan")
        .ftpScan();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};