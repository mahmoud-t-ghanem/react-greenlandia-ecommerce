import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const INPUT = "originals";
const OUTPUT = "public/images/plants";

fs.mkdirSync(OUTPUT, { recursive: true });

for (const file of fs.readdirSync(INPUT)) {
  const { name, ext } = path.parse(file);
  if (!/^\.(jpe?g|png|webp|avif)$/i.test(ext)) continue;

  const out = path.join(OUTPUT, `${name}.webp`);
  await sharp(path.join(INPUT, file))
    .rotate()
    .resize({
      width: 600,
      height: 600,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 78 })
    .toFile(out);

  console.log("✔", out);
}
