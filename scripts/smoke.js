const { spawn } = require("node:child_process");
const http = require("node:http");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const serverPath = path.join(rootDir, "dist", "server.js");
const port = 3001;

function waitForHealth() {
  return new Promise((resolve, reject) => {
    const deadline = Date.now() + 10000;

    const tryRequest = () => {
      http
        .get(`http://127.0.0.1:${port}/health`, (response) => {
          let body = "";
          response.setEncoding("utf8");
          response.on("data", (chunk) => {
            body += chunk;
          });
          response.on("end", () => {
            if (response.statusCode === 200 && body.includes("ok")) {
              resolve();
              return;
            }
            reject(
              new Error(
                `Health check gagal dengan status ${response.statusCode}`,
              ),
            );
          });
        })
        .on("error", () => {
          if (Date.now() > deadline) {
            reject(new Error("Health check timeout"));
            return;
          }
          setTimeout(tryRequest, 250);
        });
    };

    tryRequest();
  });
}

async function main() {
  const child = spawn(process.execPath, [serverPath], {
    cwd: rootDir,
    env: {
      ...process.env,
      PORT: String(port),
      HOST: "127.0.0.1",
    },
    stdio: ["ignore", "inherit", "inherit"],
  });

  try {
    await waitForHealth();
    console.log("Smoke test lolos");
  } finally {
    child.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
