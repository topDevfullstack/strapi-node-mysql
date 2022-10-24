module.exports = {
  postsReport: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::video.video.find",
        {
          fields: ["id", "title", "createdAt"],
          populate: {
            category: {
              fields: ["name"],
            },
          },
        }
      );

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.id,
            title: item.title || "",
            category: item.category.name || "",
            publishedDate: new Date(item.createdAt).toDateString() || "",
          });
          return acc;
        }, []);
      }

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
};