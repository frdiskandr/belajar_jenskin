const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const srcFile = path.join(rootDir, "src", "server.js");
const distFile = path.join(distDir, "server.js");

fs.mkdirSync(distDir, { recursive: true });
fs.copyFileSync(srcFile, distFile);
fs.writeFileSync(
  path.join(distDir, "build-info.json"),
  JSON.stringify(
    {
      builtAt: new Date().toISOString(),
      source: "src/server.js",
    },
    null,
    2,
  ),
);

console.log(`Build selesai: ${path.relative(rootDir, distFile)}`);
