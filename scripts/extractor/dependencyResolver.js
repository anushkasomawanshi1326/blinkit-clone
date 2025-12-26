const fs = require("fs");
const path = require("path");
const { resolveImportPath } = require("./fileUtils");

function resolveDependencies(entryFile, imports) {
  const visited = new Set();
  const dependencyGraph = [];

  function traverse(filePath) {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    dependencyGraph.push(filePath);

    const source = fs.readFileSync(filePath, "utf-8");
    const importLines = source.match(/import\s.+from\s.+;/g) || [];

    importLines.forEach((line) => {
      const resolvedPath = resolveImportPath(filePath, line);
      if (resolvedPath) {
        traverse(resolvedPath);
      }
    });
  }

  traverse(entryFile);

  return dependencyGraph;
}

module.exports = { resolveDependencies };
