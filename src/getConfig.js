import config from './config.json';

export default ({ fresh } = {}) => {
  if (fresh) {
    return require('./config.json');
  }
  return config;
}
