import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  verify(ctx) {
    ctx.body = strapi
      .plugin('whatsapp-cloud')
      .service('myService')
      .getWelcomeMessage();
  },
  payload(ctx) {
    ctx.body = strapi
      .plugin('whatsapp-cloud')
      .service('myService')
      .getWelcomeMessage();
  },
});
