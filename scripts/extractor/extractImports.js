function extractImports(source) {
  const importLines = source.match(/import\s.+from\s.+;/g) || [];

  const categorized = {
    reactHooks: [],
    customHooks: [],
    components: [],
    utils: [],
    apis: []
  };

  importLines.forEach((line) => {
    if (line.includes("react")) {
      if (line.includes("use")) categorized.reactHooks.push(line);
    } else if (line.includes("use")) {
      categorized.customHooks.push(line);
    } else if (line.includes("/components/")) {
      categorized.components.push(line);
    } else if (line.includes("/utils/")) {
      categorized.utils.push(line);
    } else if (line.includes("api")) {
      categorized.apis.push(line);
    }
  });

  return categorized;
}

module.exports = { extractImports };
