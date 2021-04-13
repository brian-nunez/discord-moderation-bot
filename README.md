# Discord Moderation Bot

`discord-moderation-bot` is a light-weight JavaScript Discord bot! Contains all the basic moderation commands with extra surprises.
**This bot must be self-hosted!!!**


![Logo](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/153074787/original/395040811c33520f87d9420cd4f175d90738049d/create-a-discord-moderation-bot.jpg)
## Run Locally

Clone the project

```bash
  git clone https://github.com/brian-nunez/discord-moderation-bot
```

Go to the project directory

```bash
  cd discord-moderation-bot
```

Install dependencies

```bash
  npm ci
```

Build the application

```bash
  npm run build
```

Start the bot

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to set the following environment variables!

`TOKEN` - The discord bot token (`required`)

`PREFIX` - Command prefix (`optional`)

`OWNER_ID` - Set the owner that has access to all commands (`optional`)

`MC_IP` - Minecraft Server IP (`required` for `serverdata` command)

`FOOTER_MESSAGE` - Message to be shown at the bottom of all embeds (`optional`)

## Commands

- help - List all of commands user has access to
- ping - Shows the ping response
- kick - Kicks member from server
- ban - Bans member from server
- add - Adds a role to member
- remove - Removes a role from member
- say - Make the bot speak!
- purge - Removes bulk messages
- setavatar - Sets the bots avatar
- setname - Sets the bots name
- setstatus - Sets the bots status
- setgame - Sets the bots game
- shutdown - Shutdowns down the bot
- joke - Displays a random joke
- iplookup - Shows location information of given IP
- enable - Enables bot commands
- disable - Disables bot commands
- mcuuid - Displays Minecraft players UUID
- serverdata - Displays basic Minecraft Server data
- mute - Mutes a user
- unmute - Unmutes a user
- tempmute - Temporarily mutes a user
- warn - Warns a user
- warnlist - Lists all warned players
- unwarn - Unwarns a warned player
- dev - Allows all members with the `Developer` role user owner commnads
- shorten - Shortens provided URL

## Authors and Acknowledgement

- [@brian-nunez](https://www.github.com/brian-nunez) for development and design.


## Feedback

If you have any feedback, please reach out to us at fearlessstraw@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)
