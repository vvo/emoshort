import got from "got";
import fs from "fs";

const data = await got("https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json").json();

const emojis = data.reduce((acc, emojiData) => {
  const defaultEmoji = String.fromCodePoint(...emojiData.unified.split("-").map(string => parseInt(string, 16)));
  acc[defaultEmoji] = `:${emojiData.short_name}:`;
  if (emojiData.skin_variations) {
    let currentSkinIndex = 2;
    for (const skinVariation of Object.values(emojiData.skin_variations)) {
      const skinVariationEmoji = String.fromCodePoint(...skinVariation.unified.split("-").map(string => parseInt(string, 16)));
      acc[skinVariationEmoji] = `:${emojiData.short_name}::skin-tone-${currentSkinIndex}:`;
      currentSkinIndex++;
    }
  }
  return acc;
}, {});

const json = JSON.stringify(emojis, null, 2);

fs.writeFileSync("index.js", `module.exports = ${json};`);