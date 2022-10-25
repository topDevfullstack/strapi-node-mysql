module.exports = {
  async ftpDownload(ctx, next) {
    try {
      const data = await strapi
        .service("api::ftp-download.ftp-download")
        .ftpDownload();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};