export default [
  {
    method: 'GET',
    path: '/webhook',
    handler: 'webhookController.verify',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/webhook',
    handler: 'webhookController.payload',
    config: {
      policies: [],
      auth: false
    },
  },
];
