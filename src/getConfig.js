import config from './config.json';

export default () => {
  const token = config.token || process.env.TOKEN;
  const prefix = config.prefix || process.env.PREFIX;
  const ownerID = config.ownerID || process.env.OWNER_ID;
  const moderation_channel = config.moderation_channel || process.env.MOD_CHANNEL;
  const mcserverIP = config.mcserver.ip || process.env.MC_IP;

  const computedConfig = {
    ...config,
    token,
    prefix,
    ownerID,
    moderation_channel,
    mcserver: {
      ...config.mcserver,
      ip: mcserverIP,
    }
  };

  return computedConfig;
}
