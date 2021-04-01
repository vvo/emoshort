import got from "got";
import fs from "fs";

const data = await got("https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json").json();

const emojis = data.reduce((acc, emojiData) => {
  const emoji = String.fromCodePoint(...emojiData.unified.split("-").map(string => parseInt(string, 16)));
  acc[emoji] = emojiData.short_name;
  return acc;
}, {});

const json = JSON.stringify(emojis, null, 2);

fs.writeFileSync("index.js", `module.exports = ${json};`);
