const { execSync } = require("child_process");

function detectChangedFiles() {
  const diff = execSync(
    "git diff --name-only origin/main",
    { encoding: "utf-8" }
  );

  return diff
    .split("\n")
    .filter((file) =>
      file.endsWith(".jsx") || file.endsWith(".js")
    )
    .filter((file) =>
      file.includes("/components/")
    );
}

module.exports = { detectChangedFiles };
