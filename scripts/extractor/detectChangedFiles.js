// const { execSync } = require("child_process");

// function detectChangedFiles() {
//   const diff = execSync(
//     "git diff --name-only origin/main",
//     { encoding: "utf-8" }
//   );

//   return diff
//     .split("\n")
//     .filter((file) =>
//       file.endsWith(".jsx") || file.endsWith(".js")
//     )
//     .filter((file) =>
//       file.includes("/components/")
//     );
// }

// module.exports = { detectChangedFiles };


// ================= ES MODULE IMPORT =================
import { execSync } from "child_process";

/**
 * Detect changed React component files in the repository
 * Only returns files under /components/ with .jsx or .js extension
 */
export function detectChangedFiles() {
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
