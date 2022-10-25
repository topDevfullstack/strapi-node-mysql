export default {
  routes: [
    {
     method: 'GET',
     path: '/ftp-download',
     handler: 'ftp-download.ftpDownload',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
