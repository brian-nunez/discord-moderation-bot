import config from './config.json';

export default () => {
  const token = process.env.TOKEN || config.token;
  const prefix = config.prefix;
  const ownerID = process.env.OWNER_ID || config.ownerID;
  const moderation_channel = process.env.MOD_CHANNEL || config.moderation_channel;
  const mcserverIP = process.env.MC_IP || config.mcserver.ip;
  const footerMessage = process.env.FOOTER_MESSAGE || config.footerMessage;
  const sqlHost = process.env.SQL_HOST || config.sql.host;
  const sqlUser = process.env.SQL_USER || config.sql.user;
  const sqlPassword = process.env.SQL_PASSWORD || config.sql.password;
  const sqlDatabase = process.env.SQL_DATABASE || config.sql.database;


  const computedConfig = {
    ...config,
    token,
    prefix,
    ownerID,
    moderation_channel,
    mcserver: {
      ...config.mcserver,
      ip: mcserverIP,
    },
    footerMessage,
    sql: {
      host: sqlHost,
      user: sqlUser,
      password: sqlPassword,
      database: sqlDatabase,
    },
  };

  return computedConfig;
}
