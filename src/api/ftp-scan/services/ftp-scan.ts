import * as FTP from 'basic-ftp';

async function example() {
  const client = new FTP.Client()
  client.ftp.verbose = true
  try {
      await client.access({
          host: "65.108.103.246",
          user: "freelancer",
          password: "6sEbmm4rj7tX2x72",
          secure: true
      })
      const rslt = await client.list();
      console.log(rslt);
      return rslt;
      // await client.uploadFrom("README.md", "README_FTP.md")
      // await client.downloadTo("README_COPY.md", "README_FTP.md")
  }
  catch(err) {
      console.log(err);
      return err;
  }
  client.close()
}

module.exports = {
  ftpScan: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::video.video",
        {
          fields: ["id", "title", "created_at", "provider"],
        }
      );
      // console.log(entries);
      // const entries = example();

      // reduce the data to the format we want to return
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          acc.push({
            id: item.id,
            title: item.title || "",
            provider: item.provider || "",
            publishedDate: new Date(item.created_at).toDateString() || "",
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