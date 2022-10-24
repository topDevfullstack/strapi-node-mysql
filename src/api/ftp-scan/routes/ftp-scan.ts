export default {
  routes: [
    {
     method: 'GET',
     path: '/ftp-scan',
     handler: 'ftp-scan.ftpScan',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
