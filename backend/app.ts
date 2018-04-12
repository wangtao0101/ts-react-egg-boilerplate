import { Application } from 'egg';

export default (app: Application) => {
  app.config.middleware.unshift('httpProxy');
};
