module.exports = async (d) => {
  const code = d.command.code;
  const inside = d.unpack();
  const options = [
    emoji,
    guildID="global"
  ] = inside.splits
  let find;
  if (guildID !== "global") {
    let guild = d.client.guilds.cache.get(guildID)
    if (!guild) return d.error(`\`${d.func}: Invalid guild ID in ${inside}\``)
    find = guild.emojis.cache.find((e) => e.name.toLowerCase() === emoji.toLowerCase())
   // if (!find) return d.error(`:x: Invalid emoji name in \`$customEmoji${inside}\``)
  } else {
    find = d.client.emojis.cache.find((e) => e.name.toLowerCase() === emoji.toLowerCase())
    //if (!find) return d.error(`:x: Invalid emoji name in \`$customEmoji${inside}\``)
  }
  //if (!find) return d.error(`\`CustomEmojiError: Failed to find custom emoji\``);
  return {
    code: code.replaceLast(
      `$customEmoji${inside}`,
      (find? find.toString(): "") || ""
    ),
  };
};
