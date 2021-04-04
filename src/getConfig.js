// import config from './config.json';

const config = {
  "token": "",
  "prefix": "!",
  "ownerID": "",
  "roles": {
    "muted": "Muted",
    "dev": "Developer"
  },
  "moderation_channel": "",
  "mcserver": {
    "ip": ""
  },
  "footerMessage": ""
};

export default () => {
  const token = process.env.TOKEN || config.token;
  const prefix = process.env.PREFIX || config.prefix;
  const ownerID = process.env.OWNER_ID || config.ownerID;
  const moderation_channel = process.env.MOD_CHANNEL || config.moderation_channel;
  const mcserverIP = process.env.MC_IP || config.mcserver.ip;
  const footerMessage = process.env.FOOTER_MESSAGE || config.footerMessage;

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
  };

  return computedConfig;
}
