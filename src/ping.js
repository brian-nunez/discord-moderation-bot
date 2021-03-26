export default (config, client, message) => {
  message.channel.send(`Pong **(${Date.now() - message.createdTimestamp}ms)**`);
}
