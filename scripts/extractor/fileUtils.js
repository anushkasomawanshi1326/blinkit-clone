const fs = require("fs");
const path = require("path");

function resolveImportPath(currentFile, importLine) {
  const match = importLine.match(/from\s+['"](.*)['"]/);
  if (!match) return null;

  const importPath = match[1];

  // 🚫 Ignore node_modules
  if (!importPath.startsWith(".")) return null;

  const baseDir = path.dirname(currentFile);

  const possiblePaths = [
    `${importPath}.js`,
    `${importPath}.jsx`,
    `${importPath}/index.js`,
    `${importPath}/index.jsx`
  ];

  for (const p of possiblePaths) {
    const resolved = path.resolve(baseDir, p);
    if (fs.existsSync(resolved)) {
      return resolved;
    }
  }

  return null;
}

module.exports = { resolveImportPath };
